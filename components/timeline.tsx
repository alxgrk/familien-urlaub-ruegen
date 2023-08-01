import type {NextPage} from "next";
import {DataSet, Timeline as Vis,} from "vis-timeline/standalone";
import {useEffect, useRef, useState} from "react";
import moment from "moment";
import UAParser from "ua-parser-js";
import {max, min} from 'date-fns';

const uaParser = new UAParser();

function getMultiSelectHint(): 'Strg+Click' | '⌘+Click' | 'Gedrückt halten' {
    if ('Android' === uaParser.getOS().name || 'iOS' === uaParser.getOS().name) {
        return 'Gedrückt halten';
    } else if ('Mac OS' === uaParser.getOS().name) {
        return '⌘+Click';
    }
    return 'Strg+Click';
}

function getMoveHint(): 'Scrollen oder Klicken & Ziehen' | 'Wischen' {
    if ('Android' === uaParser.getOS().name || 'iOS' === uaParser.getOS().name) {
        return 'Wischen';
    }
    return 'Scrollen oder Klicken & Ziehen';
}

export type PotentialRange = { start?: Date, end?: Date };
export type FixedRange = { start: Date, end: Date };
export type TimelineType = {
    onSelect: (selection: {
        small?: FixedRange,
        big?: FixedRange
    }) => void;
};

const Timeline: NextPage<TimelineType> = ({onSelect}) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const timelineRef = useRef<Vis | null>(null);
    const rangeByIdRef = useRef<Map<number, FixedRange>>(new Map());

    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
    const [selectedTimeRangeSmall, setSelectedTimeRangeSmall] = useState<PotentialRange>({});
    const [selectedTimeRangeBig, setSelectedTimeRangeBig] = useState<PotentialRange>({});

    const initTimeline = () => {
        if (!containerRef.current) return;

        const currentYear = selectedYear;
        const initialStart = moment(`${currentYear}-06-01T00:00:00.000`)
            .locale("de");
        const end = moment(`${currentYear}-10-31T23:59:59.999`)
            .locale("de");
        const weeks = end.diff(initialStart, "week");

        const firstSaturday = initialStart.clone().weekday(6);
        let start = initialStart.clone();

        const items = new DataSet<any>();

        // prepend days if period doesn't start with saturday
        if (start.isBefore(firstSaturday)) {
            items.add({
                id: 0,
                group: 1,
                content: start.format("DD.MM.") + '-' + firstSaturday.format("DD.MM."),
                start: start.format(),
                end: firstSaturday.format(),
            });
            items.add({
                id: 100,
                group: 2,
                content: start.format("DD.MM.") + '-' + firstSaturday.format("DD.MM."),
                start: start.format(),
                end: firstSaturday.format(),
            });
            rangeByIdRef.current.set(0, {start: start.toDate(), end: firstSaturday.toDate()})
            rangeByIdRef.current.set(100, {start: start.toDate(), end: firstSaturday.toDate()})
            start = firstSaturday.clone();
        }

        for (let baseId = 1; baseId < weeks; baseId++) {
            const baseIdGroup2 = baseId + 100;
            const weekStart = start;
            const weekEnd = weekStart.clone().add(1, "week");
            items.add({
                id: baseId,
                group: 1,
                content: weekStart.format("DD.MM.") + '-' + weekEnd.format("DD.MM."),
                start: weekStart.format(),
                end: weekEnd.format(),
            });
            items.add({
                id: baseIdGroup2,
                group: 2,
                content: weekStart.format("DD.MM.") + '-' + weekEnd.format("DD.MM."),
                start: weekStart.format(),
                end: weekEnd.format(),
            });
            rangeByIdRef.current.set(baseId, {start: weekStart.toDate(), end: weekEnd.toDate()})
            rangeByIdRef.current.set(baseIdGroup2, {start: weekStart.toDate(), end: weekEnd.toDate()})

            // prepare next iteration
            start.add(1, "week");
        }

        // append last few days if last day of season is not a saturday
        if (start.isBefore(end)) {
            items.add({
                id: 99,
                group: 1,
                content: start.format("DD.MM.") + '-' + end.format("DD.MM."),
                start: start.format(),
                end: end.format(),
            });
            items.add({
                id: 199,
                group: 2,
                content: start.format("DD.MM.") + '-' + end.format("DD.MM."),
                start: start.format(),
                end: end.format(),
            });
            rangeByIdRef.current.set(99, {start: start.toDate(), end: end.toDate()})
            rangeByIdRef.current.set(199, {start: start.toDate(), end: end.toDate()})
        }

        const groups = new DataSet<any>();
        groups.add([
            {id: 1, content: "Kleines Haus"},
            {id: 2, content: "Großes Haus"},
        ]);

        timelineRef.current = new Vis(
            containerRef.current,
            items,
            groups,
            {
                height: "220px",
                margin: {
                    // axis: 40,
                    item: {
                        vertical: 20
                    }
                },
                locale: "de",
                timeAxis: {
                    scale: "week",
                    step: 1,
                },
                showMinorLabels: false,
                min: initialStart.toDate(),
                max: end.toDate(),
                zoomable: false,
                horizontalScroll: true,
                zoomMin: 20 * 24 * 60 * 60 * 1000,
                zoomMax: 21 * 24 * 60 * 60 * 1000,
                multiselect: true,
                hiddenDates: [
                    {start: `${firstSaturday.year()}-01-01 00:00:00`, end: `${firstSaturday.year()}-05-31 23:59:59`},
                    {start: `${firstSaturday.year()}-11-01 00:00:00`, end: `${firstSaturday.year()}-12-31 23:59:59`},
                ]
            }
        );
        const timeline = timelineRef.current;
        timeline.on("select", onChange);
    };

    const onChange = (event: any) => {
        // console.log(JSON.stringify(event))
        const [smallHouseRanges, bigHouseRanges] = event.items.map((i: number) => ({id: i, range: rangeByIdRef.current.get(i)}))
            .filter((o: any) => o.range).reduce((result: any, element: any) => {
                    result[element.id < 100 ? 0 : 1].push(element.range); // Determine and push to small/large arr
                    return result;
                },
                [[], []])
        const smallHouseRange = {
            start: smallHouseRanges.length ? min(smallHouseRanges.map((i: any) => i.start)) : undefined,
            end: smallHouseRanges.length ? max(smallHouseRanges.map((i: any) => i.end)) : undefined,
        };
        const bigHouseRange = {
            start: bigHouseRanges.length ? min(bigHouseRanges.map((i: any) => i.start)) : undefined,
            end: bigHouseRanges.length ? max(bigHouseRanges.map((i: any) => i.end)) : undefined,
        };
        setSelectedTimeRangeSmall(smallHouseRange)
        setSelectedTimeRangeBig(bigHouseRange)
        console.log(JSON.stringify(smallHouseRange))
        console.log(JSON.stringify(bigHouseRange))
        onSelect({
            small: smallHouseRange.start ? smallHouseRange as FixedRange : undefined,
            big: bigHouseRange.start ? bigHouseRange as FixedRange : undefined,
        });
    };

    useEffect(() => {
        if (!timelineRef.current) initTimeline();
    }, [containerRef, selectedYear]);

    const currentYear = new Date().getFullYear();
    const nextYear = currentYear + 1;

    const [multiSelectHint, setMultiSelectHint] = useState("Strg+Klick");
    useEffect(() => {
        setMultiSelectHint(getMultiSelectHint());
    }, [])
    const [moveHint, setMoveHint] = useState("Scrollen oder Klicken & Ziehen");
    useEffect(() => {
        setMoveHint(getMoveHint());
    }, [])

    return <div className="flex flex-col text-sm sm:text-[0.75rem] self-stretch py-[1rem]">
        <select id="year" defaultValue={currentYear} className="p-2 self-center" onChange={(event) => {
            setSelectedYear(Number.parseInt(event.currentTarget.value));
            timelineRef.current?.destroy()
            timelineRef.current = null
        }}>
            <option value={currentYear}>{currentYear}</option>
            <option value={nextYear}>{nextYear}</option>
        </select>
        <div className="self-stretch py-[1rem] " ref={containerRef}/>
        <p className="text-[0.7rem]">{moveHint} zum Verschieben, {multiSelectHint} um mehrere Wochen zu selektieren</p>
        {
            selectedTimeRangeSmall?.start
            && <p className="text-[1.7rem] m-[1rem]">
                <span className="text-[1.25rem] font-medium">Kleines Haus: </span>
                <span
                    className="text-[1.25rem]">{`vom ${selectedTimeRangeSmall.start?.toLocaleDateString()} bis ${selectedTimeRangeSmall.end?.toLocaleDateString()}`}</span>
            </p>
        }
        {
            selectedTimeRangeBig?.start
            && <p className="text-[1.7rem] m-[1rem]">
                <span className="text-[1.25rem] font-medium">Großes Haus: </span>
                <span
                    className="text-[1.25rem]">{`vom ${selectedTimeRangeBig.start?.toLocaleDateString()} bis ${selectedTimeRangeBig.end?.toLocaleDateString()}`}</span>
            </p>
        }
    </div>;
};

export default Timeline;
