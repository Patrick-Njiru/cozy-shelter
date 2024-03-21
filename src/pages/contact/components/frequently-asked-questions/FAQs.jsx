import { Heading } from "../../../../components"
import contactData from "../../../../data/contact"
import QuestionAccordion from "./QuestionAccordion"

const FAQs = () => {
	return (
		<section className='mt-32 px-6 sm:px-10 md:px-16 sm:my-40 lg:my-52'>
			<div className='show-on-scroll text-center mx-auto space-y-6 lg:w-[700px]'>
				<Heading
					title='Frequently Asked Questions'
					description='Cras tincidunt lobortis feugiat vivamus at morbi leo urna molestie atole
					elementum eu facilisis faucibus interdum posuere.'
				/>
			</div>
			<div className='mt-6 flex flex-col justify-between items-center flex-wrap md:flex-row'>
				{contactData.fAQs.map((question, index) => (
					<QuestionAccordion key={index} question={question} />
				))}
			</div>
		</section>
	)
}

FAQs.propTypes = {}

export default FAQs
