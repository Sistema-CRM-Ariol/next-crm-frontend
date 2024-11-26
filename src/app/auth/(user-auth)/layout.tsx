import { Toaster } from "sonner";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Toaster
                closeButton
                richColors
                position="top-center"
                style={{
                    position: "absolute",
                }}
            />
            <main>
                {children}
            </main>
        </>
    );
}