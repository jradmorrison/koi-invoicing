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
                <button onClick={handleExportComponent}>Export to PDF</button>
            </div>

            <PDFExport ref={pdfExportComponent} paperSize="A4">
                <div style={{ backgroundColor: "#FFFFFF", color: "#000000", padding: "1rem", width: "35rem", height: "50rem" }}>
                    <div style={{ padding: "1rem" }}>
                        <div style={{ display: "flex", justifyContent: "start", alignItems: "center", height: "5rem" }}>
                            <img src="" style={{ aspectRatio: "1", width: "4rem", paddingRight: "1rem" }}></img>
                            <h1 style={{ color: "black", fontWeight: "bolder", fontSize: "1.4rem" }}>Business Name</h1>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingTop: "2rem" }}>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <h1 style={{ paddingBottom: ".2rem", paddingTop: "2rem", fontWeight: "bold", fontSize: "1.2rem" }}>From</h1>
                                <h3>Full Name</h3>
                                <h3>Email</h3>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <h1 style={{ paddingBottom: ".2rem", paddingTop: "2rem", fontWeight: "bold", fontSize: "1.2rem" }}>Invoice Date</h1>
                                <h3>Date</h3>
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <h1 style={{ paddingBottom: ".2rem", paddingTop: "2rem", fontWeight: "bold", fontSize: "1.2rem" }}>To</h1>
                                <h3>Full Name</h3>
                                <h3>Email</h3>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <h1 style={{ paddingBottom: ".2rem", paddingTop: "2rem", fontWeight: "bold", fontSize: "1.2rem" }}>Payment Due</h1>
                                <h3>Date</h3>
                            </div>
                        </div>
                        <div style={{ paddingTop: "5rem", paddingBottom: "9rem" }}>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: "#808080", padding: ".5rem" }}>
                                <h2>Description</h2>
                                <h2>Price</h2>
                            </div>
                        </div>

                        <div style={{ paddingLeft: "12rem", width: "20rem", paddingBottom: ".7rem" }}>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingBottom: ".5rem" }}>
                                <p>Total</p>
                                <p>$$$</p>
                            </div>

                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                <p>Taxes</p>
                                <p>$$$</p>
                            </div>
                        </div>

                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingLeft: "15rem", paddingTop: ".7rem", width: "17rem", fontSize: "1.2rem", borderTop: "1px solid #00000", boxSizing: "content-box" }}>
                            <h3 style={{ paddingRight: "5rem" }}>Total Due</h3>
                            <h3>$$$$$</h3>
                        </div>
                    </div>
                    <footer style={{ display: "flex", justifyContent: "start", paddingTop: "2rem", color: "black", height: "2rem", fontSize: "1rem" }}>
                        <img src="" style={{ aspectRatio: "1", width: "2rem", paddingRight: "1rem" }}></img>
                        <p>Koi Invoicing Services LLC</p>
                    </footer>
                </div>

            </PDFExport >
        </div>
    );
}

// export Invoice component
export default Invoice;