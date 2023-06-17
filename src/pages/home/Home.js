import React, { useEffect, useState } from "react";
import "../home/Home.css";
import { collection, onSnapshot, addDoc } from "firebase/firestore";
import { auth, db } from "../../firebase/config";
import TransactionForm from "../../components/TransactionForm";
import Transaction from "../../components/Transaction";
import { useCollection } from "../../hooks/useCollection";
import { ErrorMsg } from "../../helpers";

export default function Home() {
    // collection hook
    const { document: transactions, error } = useCollection("transactionData");

    // collection reff
    const collRef = collection(db, "transactionData");

    return (
        <div className="Home">
            {error && <ErrorMsg error={error} />}
            <div className="container">
                {!error && (
                    <div className="transactions">
                        {transactions.map((transac) => {
                            return <Transaction key={transac.id} transaction={transac.transaction} createdAtDate={transac.createdAtDate} amount={transac.amount} id={transac.id} />;
                        })}
                    </div>
                )}
                <div className="add-transactions">
                    <TransactionForm />
                </div>
            </div>
        </div>
    );
}
