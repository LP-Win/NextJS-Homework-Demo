export default function DashboardLayout(
    {
        children
    }: {children: React.ReactNode}) {
    return (
        <html lang = "en">
            <body>
                {/*Layout UI*/}
                <h2>Dashboard Layout</h2>
                <div>{children}</div>
            </body>
        </html>
    );
}