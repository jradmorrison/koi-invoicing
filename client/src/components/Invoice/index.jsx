// import stlying 
import "./invoice.css"

// import packages for pdf export 
import { PDFExport, savePDF } from "@progress/kendo-react-pdf"
import { useRef } from "react"

// invoice component
const Invoice = ({ invoice: { businessID, clientEmail, totalBalance, taxes, status }, service: { title, description } }) => {
    const businessName = ""
    // TODO: make qurery to db to get business name from id
    const pdfExportComponent = useRef(null);

    const handleExportComponent = (event) => {
        pdfExportComponent.current.save()
    }

    return ( // return invoice as html
        <div>
            <div>
                {/* temp button for demo */}
                <button onClick={handleExportComponent}></button>
            </div>
            <PDFExport ref={pdfExportComponent} paperSize="A4">
                <div className="invoice">
                    <div className="flex-Col invoiceContent">
                        <div className='flex header'>
                            <img className="businessLogo" src=""></img>
                            <h1>Business Name</h1>
                        </div>
                        <div className="flexRow">
                            <div className="flexCol">
                                <h1 className="section">From</h1>
                                {/* need access to developer name or ID to query for name somehow */}
                                <h3>Full Name</h3>
                                <h3>Email</h3>
                            </div>
                            <div className="flexCol">
                                <h1 className="section">Invoice Date</h1>
                                <h3>Date</h3>
                            </div>
                        </div>
                        <div className="flexRow">
                            <div className="flexCol">
                                <h1 className="section">To</h1>
                                {/* need access to client name or ID to query for name somehow */}
                                <h3>Full Name</h3>
                                <h3>Email</h3>
                            </div>
                            <div className="flexCol">
                                <h1 className="section">Payment Due</h1>
                                <h3>Date</h3>
                            </div>
                        </div>

                        <div className='invoiceDetails'>
                            <div className="flexRow grey">
                                <h2>Description</h2>
                                <h2>Price</h2>
                            </div>
                        </div>

                        <div className="gray"></div>

                        <div className='totalCont'>
                            <div className="flexRow totalNums">
                                <p>Total</p>
                                <p>$$$</p>
                            </div>

                            <div className="flexRow">
                                <p>Taxes</p>
                                <p>$$$</p>
                            </div>
                        </div>

                        <div className="flexRow totalDue">
                            <h3 className='totalWord'>Total Due</h3>
                            <h3>$$$$$</h3>
                        </div>
                    </div>

                    <footer className="flex footerStyle">
                        <img className="logo" src=""></img>
                        <p>Koi Invoicing Services LLC</p>
                    </footer>

                </div>
            </PDFExport>
        </div>
    );
}

// export Invoice component
export default Invoice;