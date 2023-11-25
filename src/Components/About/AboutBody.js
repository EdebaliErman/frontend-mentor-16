import React from 'react'
const featuresData = [{
    title: "Quick Search",
    comment: "Easily search your snippets by content, category, web address, application, and more. "
},
{
    title: "iCloud  Sync ",
    comment: "Instantly saves and syncs snippets across all your devices. "
},
{
    title: "Complete History ",
    comment: " Retrieve any snippets from the first moment you started using the app. "
}]
function AboutBody() {

    return (
        <div className='AboutBody'>
            <Desktop />
            <Features />
        </div>
    )
}

const Features = () => {
    return <div className='features'>
        {
            featuresData.map((item, key) => <div key={key}>
                <h3>{item.title}</h3>
                <h5>{item.comment}</h5>
            </div>)
        }
    </div>

}

const Desktop = () => {
    return <>
        <div className="relative w-1/2 h-[50rem] overflow-hidden ">
            <img className="absolute w-full  left-[-10rem]  object-cover" src={process.env.PUBLIC_URL + "./assets/image-computer.png"} alt='desktop' />
        </div>
    </>
}

export default AboutBody
