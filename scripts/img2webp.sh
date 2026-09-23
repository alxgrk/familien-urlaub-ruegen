#!/usr/bin/env bash
set -euo pipefail

QUALITY=80
SCALE=0.8
CWEBP=$(command -v cwebp || true)

usage() {
    cat <<'EOF'
Usage: img2webp.sh [-q QUALITY] [-s SCALE] <image...>

Converts images to WebP using cwebp.

  -q QUALITY   Quality 0-100 (default: 80)
  -s SCALE     Resolution scale factor, e.g. 0.25 = 25% of original
               (default: 0.25)
  -h           Show this help
EOF
}

while getopts "q:s:h" opt; do
    case "$opt" in
        q) QUALITY=$OPTARG ;;
        s) SCALE=$OPTARG ;;
        h) usage; exit 0 ;;
        *) usage; exit 1 ;;
    esac
done
shift $((OPTIND - 1))

[[ $# -eq 0 ]] && { echo "Error: no input files given" >&2; usage; exit 1; }

if [[ -z "$CWEBP" ]]; then
    for probe in /opt/local/bin/cwebp /usr/local/bin/cwebp /opt/homebrew/bin/cwebp; do
        if [[ -x "$probe" ]]; then
            CWEBP="$probe"
            break
        fi
    done
fi
if [[ -z "$CWEBP" ]]; then
    echo "Error: cwebp not found. Install it with: brew install webp" >&2
    exit 1
fi

for input in "$@"; do
    [[ -f "$input" ]] || { echo "Error: $input not found" >&2; exit 1; }

    width=$("sips" -g pixelWidth "$input" 2>/dev/null | awk '/pixelWidth/{print $2}')
    height=$("sips" -g pixelHeight "$input" 2>/dev/null | awk '/pixelHeight/{print $2}')
    new_width=$(awk -v w="$width" 'BEGIN{printf "%.0f", w * '"$SCALE"'}')
    new_height=$(awk -v h="$height" 'BEGIN{printf "%.0f", h * '"$SCALE"'}')

    "$CWEBP" -q "$QUALITY" -resize "$new_width" "$new_height" "$input" -o "${input%.*}.webp"
done