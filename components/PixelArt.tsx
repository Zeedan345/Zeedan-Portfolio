type Art = 'cat' | 'sun' | 'flowers' | 'sparkle' | 'cloud' | 'heart';

const cat = [
    '...........kk.....kk.....',
    '...........kok...kok.....',
    '...........koookooook....',
    '..........kooookoooook...',
    '..........koooooooccck...',
    '..........kockoockccck...',
    '..........kocccoccccck...',
    '...........kccccccck.....',
    '..........koccccccock....',
    '.........kooocccccook....',
    '...kk....koocccccccok....',
    '..kock...koocccccccok....',
    '..kock..kooocccccccok....',
    '..kock..kocccccccccok....',
    '...kock.kocccccccccok....',
    '....kockkocckcckcccok....',
    '.....kookocckcckcccok....',
    '......kkkccckcckcccck...',
    '........kkkkkkkkkkkk....',
    '.g....................g.',
    '.gg...g..........g...gg.',
    'gggg..gg...gg...ggg.gggg',
];

const palette: Record<string, string> = {
    k: '#30302d', o: '#c47b4d', c: '#fff8e9', g: '#7a8153',
};

export default function PixelArt({ kind, className = '' }: { kind: Art; className?: string }) {
    if (kind === 'cat') {
        return (
            <svg className={`pixel-art ${className}`} viewBox="0 0 24 22" fill="none" aria-hidden="true" focusable="false" shapeRendering="crispEdges">
                {cat.flatMap((row, y) => Array.from(row).map((color, x) => (
                    palette[color] ? <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill={palette[color]} /> : null
                )))}
            </svg>
        );
    }

    return (
        <svg className={`pixel-art ${className}`} viewBox="0 0 32 32" fill="none" aria-hidden="true" focusable="false" shapeRendering="crispEdges">
            {kind === 'sun' && <>
                <path d="M12 7h8v2h4v3h2v8h-2v3h-4v2h-8v-2H8v-3H6v-8h2V9h4V7Z" fill="#d5a34b" />
                <path d="M15 0h2v4h-2zM15 28h2v4h-2zM0 15h4v2H0zM28 15h4v2h-4zM4 4h3v3H4zM25 4h3v3h-3zM4 25h3v3H4zM25 25h3v3h-3z" fill="#d5a34b" />
            </>}
            {kind === 'sparkle' && <>
                <path d="M14 2h4v8h4v4h8v4h-8v4h-4v8h-4v-8h-4v-4H2v-4h8v-4h4V2Z" fill="#b65e40" />
                <path d="M14 10h4v4h4v4h-4v4h-4v-4h-4v-4h4v-4Z" fill="#d6a055" />
            </>}
            {kind === 'flowers' && <>
                <path d="M9 14h2v16H9zM23 20h2v10h-2zM5 20h4v3H5zM11 24h4v3h-4zM19 24h4v3h-4zM25 26h3v2h-3zM2 29h28v2H2z" fill="#7a8153" />
                <path d="M8 5h4v3h3v4h-3v3H8v-3H5V8h3V5Z" fill="#b65e40" />
                <path d="M22 13h4v3h3v4h-3v3h-4v-3h-3v-4h3v-3Z" fill="#d5a34b" />
                <path d="M9 9h2v2H9zM23 17h2v2h-2z" fill="#fff8e9" />
            </>}
            {kind === 'cloud' && <path d="M2 20h28v-4h-4v-4h-6V8h-8v4H8v4H2v4Zm4-3h5v-3h4v-3h3v4h6v3h3v1H6v-2Z" fill="#c8bfae" />}
            {kind === 'heart' && <path d="M4 6h8v4h8V6h8v4h4v10h-4v4h-4v4h-4v4h-8v-4H8v-4H4v-4H0V10h4V6Z" fill="currentColor" />}
        </svg>
    );
}
