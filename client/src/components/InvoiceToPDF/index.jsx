// import packages for pdf export 
import { PDFExport, savePDF } from "@progress/kendo-react-pdf"
import { useRef } from "react"

// invoice component
const InvoiceToPDF = ({ invoice: { invoiceID, businessID, clientEmail, totalBalance, status, dateDue, serviceProvided, createdOn } }) => {
    // for exporting to pdf
    const pdfExportComponent = useRef(null);
    const handleExportComponent = (event) => {
        pdfExportComponent.current.save()
    }

    // TODO: handle stripe checkout
    const handleMakePayment = (event) => {
        event.preventDefault();
    }

    // TODO: make qurery to db to get business name from id
    const businessName = ""

    return ( // return invoice page with invoice and 2 buttons
        <div style={{ display: "flex" }}>
            <div style={{ paddingRight: "9rem" }}>
                <PDFExport ref={pdfExportComponent} paperSize="A4">
                    <div style={{ backgroundColor: "#FFFFFF", color: "#000000", padding: "1rem", width: "35rem", height: "50rem" }}>
                        <div style={{ padding: "1rem" }}>
                            <div style={{ display: "flex", justifyContent: "start", alignItems: "center", height: "5rem" }}>
                                <img src="" style={{ aspectRatio: "1", width: "4rem", paddingRight: "1rem" }}></img>
                                <h1 style={{ color: "black", fontWeight: "bolder", fontSize: "1.6rem" }}>Business Name</h1>
                            </div>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingTop: "2rem" }}>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <h1 style={{ paddingBottom: ".2rem", paddingTop: "2rem", fontWeight: "bold", fontSize: "1.2rem" }}>From</h1>
                                    <h3 style={{ paddingBottom: ".2rem", fontSize: "1rem"}}>{businessID}</h3>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <h1 style={{ paddingBottom: ".2rem", paddingTop: "2rem", fontWeight: "bold", fontSize: "1.2rem" }}>Invoice Date</h1>
                                    <h3 style={{ paddingBottom: ".2rem", fontSize: "1rem"}}>{createdOn}</h3>
                                </div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <h1 style={{ paddingBottom: ".2rem", paddingTop: "2rem", fontWeight: "bold", fontSize: "1.2rem" }}>To</h1>
                                    <h3 style={{ paddingBottom: ".2rem", fontSize: "1rem"}}>{clientEmail}</h3>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <h1 style={{ paddingBottom: ".2rem", paddingTop: "2rem", fontWeight: "bold", fontSize: "1.2rem" }}>Payment Due</h1>
                                    <h3 style={{ paddingBottom: ".2rem", fontSize: "1rem"}}>{dateDue}</h3>
                                </div>
                            </div>
                            <div style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
                                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center",backgroundColor: "#808080", padding: ".3rem" }}>
                                    <h2 style={{fontSize: "1rem"}}>Description</h2>
                                    <h2 style={{fontSize: "1rem"}}>Price</h2>
                                </div>
                                <div>{serviceProvided}</div>
                            </div>

                            <div style={{ paddingLeft: "12rem", width: "20rem", paddingBottom: ".7rem" }}>
                                <div style={{ display: "flex", flexDirection: "row",
                                width: "18rem", justifyContent: "space-between", alignItems: "center", paddingBottom: ".5rem" }}>
                                    <p>Total</p>
                                    <p>Service Price</p>
                                </div>

                                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center",
                                width: "18rem" }}>
                                    <p>Taxes</p>
                                    <p>Tax Amount</p>
                                </div>
                            </div>

                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingLeft: "15rem", paddingTop: ".2rem", width: "17rem", fontSize: "1.2rem", borderTop: "1px solid #00000", boxSizing: "content-box" }}>
                                <h3 style={{ paddingRight: "5rem", fontSize: "1.2rem"}}>Total Due</h3>
                                <h3 style={{paddingRight: "2rem",fontSize: "1.2rem"}}>{totalBalance}</h3>
                            </div>
                        </div>
                        <footer style={{ display: "flex", justifyContent: "start", paddingTop: "2rem", color: "black", height: "2rem", fontSize: "1rem" }}>
                            <img src="" style={{ aspectRatio: "1", width: "2rem", paddingRight: "1rem" }}></img>
                            <p>Koi Invoicing Services LLC</p>
                        </footer>
                    </div>
                </PDFExport >
            </div>
            <div style={{display: "flex", flexDirection: "column", paddingTop: "16rem"}}>
                <div style={{display:"flex", flexDirection: "column", color: "#D9D9D9"}}>
                    <h1 style={{fontSize: "3rem", padding: "0"}}>Invoice - {businessID}</h1>
                    <p style={{fontSize: "1.5rem", padding: "0", margin: "0"}}>Date Billed: {createdOn}</p>
                    <p style={{fontSize: "1.5rem", padding: "0", marginTop: "0"}}>Ref ID: {invoiceID}</p>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#D9D9D9", padding: "1rem", borderRadius: ".3rem", minWidth: "20rem", minHeight: "4rem", marginBottom: "3rem"}}>
                    <p>Due {dateDue}</p>
                    <h4>${totalBalance}</h4>
                </div>
                <button onClick={handleExportComponent} style={{ padding: ".5rem", borderRadius: "1rem", backgroundColor: "#FDC447", marginBottom: "1rem", textAlign: "center", color: "#010144"}}>Export to PDF</button>
                <button onClick={handleMakePayment} style={{ padding: ".5rem", borderRadius: "1rem", backgroundColor: "#FDC447", color: "#010144"}}>Make Payment</button>
            </div>
        </div>
    );
}

// export Invoice component
export default InvoiceToPDF;