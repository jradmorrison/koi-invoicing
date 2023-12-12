import { useQuery } from '@apollo/client';
import formatDate from '../../utils/dateFormatter';
// invoice component
const InvoiceToPDF = ({ invoice: { _id, businessId, clientEmail, clientName, totalBalance, status, dateDue, serviceProvided, serviceTitle, createdOn } }) => {

    // TODO: make qurery to db to get business name from id
    const businessName = ""

    return ( // return invoice page with invoice and 2 buttons
        <div style={{ display: "flex" }}>
            <div style={{ paddingRight: "9rem" }}>
                <div style={{ backgroundColor: "#FFFFFF", color: "#000000", padding: "1rem", width: "35rem", height: "50rem" }}>
                    <div style={{ padding: "1rem" }}>
                        <div style={{ display: "flex", justifyContent: "start", alignItems: "center", height: "5rem" }}>
                            <img src="" style={{ aspectRatio: "1", width: "4rem", paddingRight: "1rem" }}></img>
                            <h1 style={{ color: "black", fontWeight: "bolder", fontSize: "1.6rem" }}>Business Name</h1>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingTop: "2rem" }}>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <h1 style={{ paddingBottom: ".2rem", paddingTop: "2rem", fontWeight: "bold", fontSize: "1.2rem" }}>From</h1>
                                <h3 style={{ paddingBottom: ".2rem", fontSize: "1rem" }}>{businessId.name}</h3>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <h1 style={{ paddingBottom: ".2rem", paddingTop: "2rem", fontWeight: "bold", fontSize: "1.2rem" }}>Invoice Date</h1>
                                <h3 style={{ paddingBottom: ".2rem", fontSize: "1rem" }}>{formatDate(createdOn)}</h3>
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <h1 style={{ paddingBottom: ".2rem", paddingTop: "2rem", fontWeight: "bold", fontSize: "1.2rem" }}>To</h1>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <h3 style={{ fontSize: "1rem" }}>{clientName}</h3>
                                    <h3 style={{ fontSize: "1rem" }}>{clientEmail}</h3>
                                </div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <h1 style={{ paddingBottom: ".2rem", paddingTop: "2rem", fontWeight: "bold", fontSize: "1.2rem" }}>Payment Due</h1>
                                <h3 style={{ paddingBottom: ".2rem", fontSize: "1rem" }}>{formatDate(dateDue)}</h3>
                                <h1></h1>
                                <h1></h1>
                            </div>
                        </div>
                        <div style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: "#808080", padding: ".3rem" }}>
                                <h2 style={{ fontSize: "1rem" }}>Description</h2>
                                <h2 style={{ fontSize: "1rem" }}>Price</h2>
                            </div>
                            <div>{serviceTitle}: {serviceProvided}</div>
                        </div>

                        <div style={{ paddingLeft: "12rem", width: "20rem", paddingBottom: ".7rem" }}>
                            <div style={{
                                display: "flex", flexDirection: "row",
                                width: "18rem", justifyContent: "space-between", alignItems: "center", paddingBottom: ".5rem"
                            }}>
                                <p>Total</p>
                                <p>Service Price</p>
                            </div>

                            <div style={{
                                display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center",
                                width: "18rem"
                            }}>
                                <p>Taxes</p>
                                <p>Tax Amount</p>
                            </div>
                        </div>

                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingLeft: "15rem", paddingTop: ".2rem", width: "17rem", fontSize: "1.2rem", borderTop: "1px solid #00000", boxSizing: "content-box" }}>
                            <h3 style={{ paddingRight: "5rem", fontSize: "1.2rem" }}>Total Due</h3>
                            <h3 style={{ paddingRight: "2rem", fontSize: "1.2rem" }}>{totalBalance}</h3>
                        </div>
                    </div>
                    <footer style={{ display: "flex", justifyContent: "start", paddingTop: "2rem", color: "black", height: "2rem", fontSize: "1rem" }}>
                        <img src="" style={{ aspectRatio: "1", width: "2rem", paddingRight: "1rem" }}></img>
                        <p>Koi Invoicing Services LLC</p>
                    </footer>
                </div>
            </div>
        </div>
    );
}

// export Invoice component
export default InvoiceToPDF;