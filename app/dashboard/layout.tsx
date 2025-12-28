export default function DashboardLayout(
    {
        children
    }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <h2>Dashboard Layout</h2>
        <div>{children}</div>
        </body>
        </html>
    );
}