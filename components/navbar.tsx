import type {NextPage} from "next";
import {Fragment, useCallback, useMemo, useState} from "react";
import CSS, {Property} from "csstype";
import {useRouter} from "next/router";
import Link from "next/link";
import {
    Box, Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText
} from "@mui/material";

type NavbarType = {
    hamburgerMenu?: string;
    mobileNavigationMenu?: boolean;

    /** Style props */
    navbarHeight?: Property.Height;
    navbarPadding?: Property.Padding;
    navbarAlignSelf?: Property.AlignSelf;
    navbarJustifyContent?: Property.JustifyContent;
    logoHeight?: Property.Height;
    logoPadding?: Property.Padding;
    logoFlex?: Property.Flex;
    logoBoxSizing?: Property.BoxSizing;
    cayoBeachFontSize?: Property.FontSize;
    navigationMenuHeight?: Property.Height;
    navigationMenuPadding?: Property.Padding;
    navigationMenuGap?: Property.Gap;
    navigationMenuFlex?: Property.Flex;
    navigationMenuBoxSizing?: Property.BoxSizing;
    navigationMenuJustifyContent?: Property.JustifyContent;
    mobileNavigationMenuHeight?: Property.Height;
    hamburgerMenuIconWidth?: Property.Width;
    hamburgerMenuIconHeight?: Property.Height;
};

const defaultProps = {
    hamburgerMenu: "/notification.svg",
    mobileNavigationMenu: false,
    navbarHeight: "5.63rem",
    navbarPadding: "0.1rem 0.1rem",
    navbarAlignSelf: "stretch",
    navbarJustifyContent: "flex-start",
    logoHeight: "3.75rem",
    logoPadding: "0rem 1rem",
    logoFlex: "1",
    logoBoxSizing: "border-box",
    cayoBeachFontSize: "2.5rem",
    navigationMenuFlex: "1",
    navigationMenuBoxSizing: "border-box",
    navigationMenuJustifyContent: "flex-end",
    mobileNavigationMenuHeight: "3.75rem",
    hamburgerMenuIconWidth: "1.49rem",
    hamburgerMenuIconHeight: "1.5rem",
}

const links = (onUnterknfteClick: () => void, onBuchungClick: () => void, onLageClick: () => void, onDatenschutzClick: () => void, onImpressumClick: () => void) => {
    return [
        {href: "/unterkuenfte", text: "Unterkünfte", onClick: onUnterknfteClick},
        {href: "/buchung", text: "Buchung", onClick: onBuchungClick},
        {href: "/lage", text: "Lage", onClick: onLageClick},
        {href: "/dsgvo", text: "Datenschutzerklärung", onClick: onDatenschutzClick},
        {href: "/impressum", text: "Impressum", onClick: onImpressumClick},
    ];
}

const Navbar: NextPage<NavbarType> = (props) => {
    const {
        hamburgerMenu,
        mobileNavigationMenu,
        navbarHeight,
        navbarPadding,
        navbarAlignSelf,
        navbarJustifyContent,
        logoHeight,
        logoPadding,
        logoFlex,
        logoBoxSizing,
        cayoBeachFontSize,
        navigationMenuHeight,
        navigationMenuPadding,
        navigationMenuGap,
        navigationMenuFlex,
        navigationMenuBoxSizing,
        navigationMenuJustifyContent,
        mobileNavigationMenuHeight,
        hamburgerMenuIconWidth,
        hamburgerMenuIconHeight,
    } = Object.assign({}, defaultProps, props);

    const navbarStyle: CSS.Properties = useMemo(() => {
        return {
            position: "unset",
            width: "unset",
            height: navbarHeight,
            padding: navbarPadding,
            alignSelf: navbarAlignSelf,
            justifyContent: navbarJustifyContent,
        };
    }, [
        navbarHeight,
        navbarPadding,
        navbarAlignSelf,
        navbarJustifyContent,
    ]);

    const logoStyle: CSS.Properties = useMemo(() => {
        return {
            height: logoHeight,
            padding: logoPadding,
            flex: logoFlex,
            boxSizing: logoBoxSizing,
        };
    }, [logoHeight, logoPadding, logoFlex, logoBoxSizing]);

    const cayoBeachStyle: CSS.Properties = useMemo(() => {
        return {
            fontSize: cayoBeachFontSize,
        };
    }, [cayoBeachFontSize]);

    const navigationMenuStyle: CSS.Properties = useMemo(() => {
        return {
            height: navigationMenuHeight,
            padding: navigationMenuPadding,
            gap: navigationMenuGap,
            flex: navigationMenuFlex,
            boxSizing: navigationMenuBoxSizing,
            justifyContent: navigationMenuJustifyContent,
        };
    }, [
        navigationMenuHeight,
        navigationMenuPadding,
        navigationMenuGap,
        navigationMenuFlex,
        navigationMenuBoxSizing,
        navigationMenuJustifyContent,
    ]);

    const mobileNavigationMenuStyle: CSS.Properties = useMemo(() => {
        return {
            height: mobileNavigationMenuHeight,
        };
    }, [mobileNavigationMenuHeight]);

    const hamburgerMenuIconStyle: CSS.Properties = useMemo(() => {
        return {
            width: hamburgerMenuIconWidth,
            height: hamburgerMenuIconHeight,
        };
    }, [hamburgerMenuIconWidth, hamburgerMenuIconHeight]);

    const router = useRouter();

    const onStartClick = useCallback(() => {
        router.push("/");
    }, [router]);

    const onUnterknfteClick = useCallback(() => {
        router.push("/unterkuenfte");
    }, [router]);

    const onBuchungClick = useCallback(() => {
        router.push("/buchung");
    }, [router]);

    const onLageClick = useCallback(() => {
        router.push("/lage");
    }, [router]);

    const onDatenschutzClick = useCallback(() => {
        router.push("/dsgvo");
    }, [router]);

    const onImpressumClick = useCallback(() => {
        router.push("/impressum");
    }, [router]);

    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer =
        (open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setDrawerOpen(open);
            };

    const list = () => (
        <Box
            sx={{width: 250}}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {
                    links(onUnterknfteClick, onBuchungClick, onLageClick, onDatenschutzClick, onImpressumClick)
                        .map(({text, onClick}) => (
                            <ListItem key={text} disablePadding onClick={onClick}>
                                <ListItemButton>
                                    <ListItemText primary={text}/>
                                </ListItemButton>
                            </ListItem>
                        ))
                }
            </List>
        </Box>
    );

    return (
        <div
            className="relative h-[90px] flex flex-row py-2.5 px-0 box-border items-center justify-start
        text-left text-base text-light-text-color font-title-2
        lg:flex-row lg:items-center lg:justify-center md:w-auto md:[align-self:unset] md:flex-row md:gap-[0px] md:items-center md:justify-center md:pl-2.5 md:pr-2.5 md:box-border
        sm:flex-row sm:gap-[0px] sm:items-center sm:justify-center"
            style={navbarStyle}
        >
            <Fragment key="right">
                <Drawer
                    anchor="right"
                    open={drawerOpen}
                    onClose={toggleDrawer(false)}
                    PaperProps={{
                        sx: {backgroundColor: "#fff5eb",}
                    }}
                >
                    {list()}
                </Drawer>
            </Fragment>
            <div
                className="flex-1 flex flex-row py-0 pl-[0.1rem]
          box-border items-center justify-start md:flex-1 md:items-center md:justify-start"
                style={logoStyle}
            >
                <button
                    className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-21xl
            leading-[100%] font-belleza text-light-text-color text-left inline-block [backdrop-filter:blur(4px)]"
                    style={cayoBeachStyle}
                    onClick={onStartClick}
                >
                    Familienurlaub Rügen
                </button>
            </div>
            <div
                className="flex-1 flex flex-row py-0 pr-[1rem]
            box-border items-center justify-end gap-[10%] md:hidden md:items-end md:justify-center sm:hidden"
                style={navigationMenuStyle}
            >
                {
                    links(onUnterknfteClick, onBuchungClick, onLageClick, onDatenschutzClick, onImpressumClick)
                        .map(({href, text, onClick}) => (
                            <Link
                                className="cursor-pointer [text-decoration:none] text-white hover:underline visited:text-white relative leading-[125%] font-medium text-[0.9rem]"
                                key={text}
                                href={href}
                                onClick={onClick}
                            >
                                {text}
                            </Link>
                        ))
                }
            </div>
            {!mobileNavigationMenu && (
                <div
                    className="flex-1 pr-[1rem] hidden flex-col items-end justify-center md:flex md:flex-1 sm:flex sm:flex-1"
                    style={mobileNavigationMenuStyle}
                >
                    <img
                        className="w-[23.82px] h-6 overflow-hidden shrink-0 md:flex sm:flex"
                        alt=""
                        src={hamburgerMenu}
                        style={hamburgerMenuIconStyle}
                        onClick={toggleDrawer(true)}
                    />
                </div>
            )}
        </div>
    );
};

export default Navbar;
