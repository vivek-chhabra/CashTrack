import React, { useEffect, useState } from "react";
import { useInput } from "../hooks/useInput";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import { useFirestore } from "../hooks/useFirestore";
import { ErrorMsg } from "../helpers";
import { async } from "q";

export default function TransactionForm() {
    // input hook
    const [transaction, updateTransaction, resetTransaction] = useInput("");
    const [amount, updateAmount, resetAmount] = useInput("");

    // collection reference
    const collRef = collection(db, "transactionData");

    // firestore hook
    const { addDocument, response } = useFirestore("transactionData");
    const { error, isPending, success, document } = response;

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addDocument({ transaction: transaction, amount: amount });
        if (success) {
            resetAmount();
            resetTransaction();
        }
    };

    return (
        <>
            {error && <ErrorMsg error={error} />}
            <h3>Add a Transaction</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-2">
                    <label htmlFor="transactionName" className="form-label">
                        Transaction Name :
                    </label>
                    <input type="text" required value={transaction} onChange={updateTransaction} className="shadow-none form-control" id="transactionName" aria-describedby="emailHelp" />
                </div>
                <div className="mb-2">
                    <label htmlFor="amount" className="form-label">
                        Amount ( <i className="fa-solid fa-indian-rupee-sign"></i> ) :
                    </label>
                    <input type="number" required value={amount} onChange={updateAmount} className="shadow-none form-control" id="amount" />
                </div>
                {isPending ? (
                    <>
                        <button type="submit" className="btn btn-primary mt-3" disabled>
                            Loading...
                        </button>
                    </>
                ) : (
                    <>
                        <button type="submit" className="btn btn-primary mt-3">
                            Add Transaction
                        </button>
                    </>
                )}
            </form>
        </>
    );
}
