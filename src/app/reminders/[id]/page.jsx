const page = async ({ params }) => {

    const data = await params
    console.log(data)

    return (
        <div>
            I am Reminder {data.id}
        </div>
    )
}

export default page
