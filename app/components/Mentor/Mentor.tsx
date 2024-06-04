const Mentor = () => {

    const team = [
        {
            avatar: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
            name: "Martiana dialan",
            title: "Founder & CEO",
        },
        {
            avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
            name: "Micheal colorand",
            title: "Chief Marketing Officer",
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/79.jpg",
            name: "Brown Luis",
            title: "Lead Instructor",
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/63.jpg",
            name: "Lysa sandiago",
            title: "Content Manager",
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/86.jpg",
            name: "Daniel martin",
            title: "Community Manager",
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/46.jpg",
            name: "Vicky tanson",
            title: "Technical Support Specialist",
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/29.jpg",
            name: "Nilson kalin",
            title: "Social Media Marketing Specialist",
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            name: "Tina watersone",
            title: "Social Media Marketing Specialist",
        },
    ]

    return (
        <section className="py-14" id="mentors-section">
            <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
                <div className="max-w-xl mx-auto">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Meet our team
                    </h3>
                    <p className="text-gray-600 mt-3">
                    At BesidesU, our mission is to empower you with the skills and knowledge to excel in the ever-evolving world of digital marketing. Behind our comprehensive courses is a team of industry experts, dedicated educators, and passionate marketers who bring a wealth of experience and a deep commitment to your success.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                        {
                            team.map((item, idx) => (
                                <li key={idx}>
                                    <div className="w-20 h-20 mx-auto">
                                        <img
                                            src={item.avatar}
                                            className="w-full h-full rounded-full"
                                            alt=""
                                        />
                                    </div>
                                    <div className="mt-2">
                                        <h4 className="text-gray-700 font-semibold sm:text-lg">{item.name}</h4>
                                        <p className="text-indigo-600">{item.title}</p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default Mentor;
