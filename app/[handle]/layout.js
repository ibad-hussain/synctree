export async function generateMetadata({ params }) {
    const { handle } = params;

    return {
        title: `${handle} | SyncTree`,
    };
}

export default function HandleLayout({ children }) {
    return <>{children}</>;
}
