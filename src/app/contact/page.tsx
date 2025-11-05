import ContactAniTest from "@/components/sections/contact/ContactAniTest"
import { ContactForm } from "@/components/sections/contact/ContactForm"
import ContactHero from "@/components/sections/contact/ContactHero"


const Contact = () => {
  return (
    <div className="pb-5">
      <ContactHero />
      {/* <ContactForm /> */}
      <ContactAniTest />
    </div>
  )
}

export default Contact