import React from 'react'

const MissionSection2 = () => {
    return (
        <>
            <section
                className="bg-black bg-cover bg-center py-12"
                style={{
                    backgroundImage: `url('/images/mission-section-bg.jpg')`,
                }}
            >
                <div className="text-white max-w-[1300px] mx-auto px-4 sm:px-6 md:px-8">
                    <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-bold mb-4 sm:mb-6 font-montserrat text-white leading-tight">
                        Qui sommes-nous
                    </h2>
                    <div className="w-[30px] sm:w-[40px] md:w-[50px] h-[2px] bg-white mb-4"></div>
                    <p className="text-[14px] sm:text-[16px] md:text-[18px] mb-6 sm:mb-8 font-montserrat">
                        Depuis notre création, nous nous sommes engagés à révolutionner la téléprospection et le développement commercial. Notre histoire est celle d'une équipe passionnée travaillant main dans la main avec nos clients pour atteindre leurs objectifs.
                    </p>
                    <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-bold mb-4 sm:mb-6 font-montserrat text-white leading-tight">
                        Notre Mission
                    </h2>
                    <div className="w-[30px] sm:w-[40px] md:w-[50px] h-[2px] bg-white mb-4"></div>
                    <p className="text-[14px] sm:text-[16px] md:text-[18px] mb-6 sm:mb-8 font-montserrat">
                        Chez CRO, notre mission est simple : alléger le fardeau de vos équipes de vente et propulser votre croissance grâce à des services de téléprospection exceptionnels et une stratégie personnalisée.
                    </p>
                    <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-bold mb-4 sm:mb-6 font-montserrat text-white leading-tight">
                        Pourquoi nous
                    </h2>
                    <div className="w-[30px] sm:w-[40px] md:w-[50px] h-[2px] bg-white mb-4"></div>
                    <p className="text-[14px] sm:text-[16px] md:text-[18px] mb-6 sm:mb-8 font-montserrat">
                        Nous sommes bien plus qu'une agence de téléprospection ; nous sommes votre partenaire de croissance. Explorez notre univers et découvrez comment Bizdev.store peut stimuler votre activité commerciale. Approche humaine dans la prospection B2B.
                    </p>
                    <ul className="text-[14px] sm:text-[16px] md:text-[18px] mb-6 sm:mb-8 font-montserrat space-y-2">
                        <li className="flex items-start"><span className="w-2 h-2 max-h-2 rounded-full bg-white mr-2 mt-2"></span>
                            Expertise inégalée dans le développement commercial.
                        </li>
                        <li className="flex items-start"><span className="w-2 h-2 max-h-2 rounded-full bg-white mr-2 mt-2"></span>
                            Résultats concrets et mesurables.
                        </li>
                        <li className="flex items-start"><span className="w-2 h-2 max-h-2 rounded-full bg-white mr-2 mt-2"></span>
                            Engagement envers la satisfaction client.
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default MissionSection2