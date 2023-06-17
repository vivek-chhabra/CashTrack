import React from "react";
import { useFirestore } from "../hooks/useFirestore";
import { useToggle } from "../hooks/useToggle";
import { capitalize } from "../helpers";

export default function Transaction({ transaction, amount, id, createdAtDate }) {
    const { deleteDocument } = useFirestore("transactionData");

    const [showDate, toggleShowDate] = useToggle(false);

    return (
        <div className="Transaction" onClick={toggleShowDate}>
            <i className="fa-solid fa-xmark" onClick={() => deleteDocument(id)}></i>
            <p className="transaction-name">{showDate ? createdAtDate : capitalize(transaction)}</p>
            <div className="amount">
                <i className="fa-solid fa-indian-rupee-sign"></i>
                {amount}
            </div>
        </div>
    );
}
