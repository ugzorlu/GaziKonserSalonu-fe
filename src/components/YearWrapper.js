import React, { useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

const YearWrapper = (props) => {
	const [isVisible, setIsVisible] = useState(false);
	const [visiblePDFIndex, setVisiblePDFIndex] = useState(null);

	return (
		<div
			className='Year-container'
			onMouseEnter={() => setIsVisible(true)}
			onMouseLeave={() => setIsVisible(false)}
			onClick={() => setIsVisible(!isVisible)}
			onScroll={(e) => e.stopPropagation()}
		>
			<div className='Year-title'>{props.year.title}</div>
			<div className='Year-content-container'>
				{isVisible && (
					<>
						{props.year.programs.map((program, index) => (
							<div
								key={index}
								className='Year-program-container'
								onClick={(e) => e.stopPropagation()}
							>
								<a href={program.link} target='_blank' rel='noreferrer'>
									<div
										className='Year-program-date-container'
										onMouseEnter={() => {
											setVisiblePDFIndex(index);
										}}
										onMouseLeave={() => setVisiblePDFIndex(null)}
									>
										{program.date}
										{visiblePDFIndex === index && (
											<Document
												className='Year-program-pdf'
												file={process.env.PUBLIC_URL + '/sample.pdf'}
												loading='Yükleniyor...'
											>
												<Page
													pageNumber={1}
													canvasBackground='white'
													loading='Yükleniyor...'
												/>
											</Document>
										)}{' '}
									</div>
								</a>
							</div>
						))}
					</>
				)}
			</div>
		</div>
	);
};

export default YearWrapper;
