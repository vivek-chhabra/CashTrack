import React, { useState } from "react";
import "../home/Home.css";
import { useInput } from "../../hooks/useInput";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/config";

export default function Home() {
    // input hook
    const [transaction, updateTransaction] = useInput("");
    const [amount, updateAmount] = useInput("");
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState("");

    // collection reference
    const collRef = collection(db, "transactionData");

    // handling submit
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    // onSnapshot(
    //     collRef,
    //     () => {
    //         setIsPending(true);
    //         getDocs();
    //         setIsPending(false);
    //     },
    //     (err) => {
    //         setError(err);
    //         setIsPending(false);
    //     }
    // );

    return (
        <div className="Home">
            <div className="container">
                <div className="transactions">
                    <div className="transaction">
                        <i className="fa-solid fa-xmark"></i>
                        <p className="transaction-name">Grocery Items</p>
                        <div className="amount">
                            <i class="fa-solid fa-indian-rupee-sign"></i>
                            50
                        </div>
                    </div>
                    <div className="transaction">
                        <i className="fa-solid fa-xmark"></i>
                        <p className="transaction-name">Grocery Items</p>
                        <div className="amount">
                            <i class="fa-solid fa-indian-rupee-sign"></i>
                            50
                        </div>
                    </div>
                </div>
                <div className="add-transactions">
                    <h3>Add a Transaction</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-2">
                            <label for="transactionName" className="form-label">
                                Transaction Name :
                            </label>
                            <input type="text" required value={transaction} onChange={updateTransaction} className="shadow-none form-control" id="transactionName" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-2">
                            <label for="amount" className="form-label">
                                Amount ( <i class="fa-solid fa-indian-rupee-sign"></i> ) :
                            </label>
                            <input type="number" required value={amount} onChange={updateAmount} className="shadow-none form-control" id="amount" />
                        </div>
                        <button type="submit" className="btn btn-primary mt-3">
                            Add Transaction
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
