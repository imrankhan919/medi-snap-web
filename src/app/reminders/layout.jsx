export const metadata = {
    title: "Your Medicines Reminder",
    description: "A.I Powered Medcines Details",
};


const ReminderLayout = ({ children }) => {
    return (
        <>
            {children}
            <footer className="p-4 text-center text-sm text-gray-400 border border-t-1 border-gray-200 w-full absolute bottom-0">
                Your Medicines Reminder
            </footer>
        </>
    )
}

export default ReminderLayout
