import { collection, onSnapshot, addDoc } from "firebase/firestore";
import TransactionForm from "../../components/TransactionForm";
import { useCollection } from "../../hooks/useCollection";
import Transaction from "../../components/Transaction";
import React, { useEffect, useState } from "react";
import { auth, db } from "../../firebase/config";
import { ErrorMsg } from "../../helpers";
import "../home/Home.css";

export default function Home() {
    // collection hook
    const { document: transactions, error } = useCollection("transactionData");
    console.log(transactions);

    // collection reff
    const collRef = collection(db, "transactionData");

    return (
        <div className="Home">
            {error && <ErrorMsg error={error} />}
            <div className="container">
                {transactions.length != 0 && (
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
