import React, {useEffect} from 'react'


const SlickItem = props => {
    return (
        <div {...props} className={"slick-slick"}>
            {props.children}
        </div>
    )
}


const Slick = props => {

    const slickTrackStyle = {
        opacity: 1,
        width: 25000,
        transform: "translate3d(-194px, 0px, 0px)"
    }

    const injectStyle = (parent, styleList) => {
        // const injectedParent = parent.classList.add(...styleList)
        // return injectedParent
        console.log(parent)
    }

    return (
        <div className={`${props.className} slick-initialized slick-slider`}>
            <div className={"slick-list draggable"}>
                <div className={"slick-track"} style={slickTrackStyle}>
                    {/* Cloned Slick */}
                    {/*<SlickItem />*/}
                    {props.children.map((child, index) => (
                        <SlickItem
                            id={`slick-slide${index}`}
                            data-slick-index={`${index + 1}`}
                            aria-hidden={true}
                            tabindex={"-1"}
                            role={"tabpanel"}
                        >
                            <div>
                                <h1>Someting</h1>
                                {child}
                            </div>
                        </SlickItem>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default Slick