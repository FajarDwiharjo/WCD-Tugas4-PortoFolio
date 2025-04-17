import Bio from "../../komponen/contact/bio/bio" 
import Form from "../../komponen/contact/form/form"
import NavBar from "../../komponen/navbar/navbar"
import Footer from "../../komponen/footer/footer"

export default function Contactpage() {
    return (
      <>
        <main className="flex flex-col max-h-screen max-w-screen">
          <NavBar/>
          <div className="flex flex-row mt-24">
            <Bio />
            <Form />
          </div>
          <Footer/>
        </main>
      </>
    )
  }