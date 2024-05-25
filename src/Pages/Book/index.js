import React, {useState} from "react";
import './book.css';
import {Document, Page} from "react-pdf";
import {IconButton} from "@mui/material";
import {ArrowCircleLeft, ArrowCircleRight} from "@mui/icons-material";

function Book(){
    const [numPages,setNumPages] = useState();
    const [pageNumber,setPageNumber] = useState(1);
    const [activeIndex, setActiveIndex] = useState(0);
    let indexPosition = 1;
    function onDocumentLoadSuccess({ numPages })
    {
        setNumPages(numPages);
    }

    const addFlippedClass = () => {
        const elements = document.querySelectorAll('.book__page');
        const prevBtn = document.querySelector('.prevBtn');
        const nextBtn = document.querySelector('.nextBtn');
        const book = document.querySelector('.book__content');
        elements[activeIndex].classList.add('book__flipped');
        elements[activeIndex].style.zIndex = activeIndex;
        if(activeIndex == 0){
            book.style.transform = "translateX(50%)";
            prevBtn.style.transform = "translateX(-235px)";
            nextBtn.style.transform = "translateX(235px)";
        }
        let newIndex = (activeIndex + 1)
        setActiveIndex(newIndex);
    }

    const removeFlippedClass = () => {
        if(activeIndex > 0){
            const elements = document.querySelectorAll('.book__page');
            const prevBtn = document.querySelector('.prevBtn');
            const nextBtn = document.querySelector('.nextBtn');
            const book = document.querySelector('.book__content');
            let newIndex = (activeIndex - 1)
            elements[newIndex].classList.remove('book__flipped');
            elements[newIndex].style.zIndex = numPages - newIndex;
            if(newIndex == 0){
                book.style.transform = "translateX(0%)";
                prevBtn.style.transform = "translateX(0px)";
                nextBtn.style.transform = "translateX(0px)";
            }
            setActiveIndex(newIndex);
        }
    }

    return(
        <>
            <div className="book">
                <span className="prevBtn">
                     <IconButton >
                        <ArrowCircleLeft onClick={removeFlippedClass}/>
                     </IconButton>
                </span>

                <div className="book__content">
                    <Document file="/dollar.pdf" height={150} onLoadSuccess={onDocumentLoadSuccess}>
                        {Array.apply(null, Array(numPages))
                            .map((x, i) => i + 1)
                            .map((page) => {
                                return <div className={`book__page`} key={page} style={{ zIndex: (numPages - page) }}>
                                    <div className="book__front">
                                        <div className="book__frontContent">
                                            <Page pageNumber={indexPosition++} style="book__frontContent" renderAnnotationLayer={false}
                                                  renderTextLayer={false}/>
                                        </div>
                                    </div>
                                    <div className="book__back">
                                        <div className="book__backContent">
                                            <Page pageNumber={indexPosition++} style="book__backContent" renderAnnotationLayer={false}
                                                  renderTextLayer={false} />
                                        </div>
                                    </div>
                                </div>
                            })}

                    </Document>
                </div>
                <span className="nextBtn">
                    <IconButton >
                       <ArrowCircleRight onClick={addFlippedClass} />
                    </IconButton>
                </span>

            </div>
        </>
    );
}

export default Book