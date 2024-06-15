
"use client";
import './ttt.css';
import { useState } from 'react';
import {Besley} from "next/dist/compiled/@next/font/dist/google";

export default function Home() {
    let [chatHistory, setChatHistory] = useState([
        {name: "baran", message: "Hello!"},
        {name: "emir", message: "Hi!"}
    ]);
    let [newMessage, setNewMessage] = useState("");
    
    let [gameState, setGameState] = useState({
        board: Array(9).fill(""),
        xIsNext: true
    });
    
    function checkWinner(board) {
        const winLines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        
        for (let i = 0; i < winLines.length; i++) {
            const [a, b, c] = winLines[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                let itsAPlayer = board[a] === "X" || board[a] === "O";
                if (itsAPlayer) {
                    return board[a];
                }
            }
        }
        
        return null;
    }

    return (
        <div className="container">
            <div className="left-area">
                <div className="status-bar">
                    <p>Next player: X</p>
                </div>
                <div className="board">
                    {gameState.board.map((cell, index) => (
                        <button className="cell" key={index}>
                            {cell}
                        </button>
                    ))}
                </div>
            </div>
            <div className="right-area">
                <div className="chat-history">
                    {chatHistory.map(chat => (
                        <div className="chat-msg" key={chat.message}>
                            <p>{chat.name}: {chat.message}</p>
                        </div>
                    ))}
                </div>
                <div className="chat-new-msg">
                    <textarea type="text" placeholder="Enter message"/>
                    <button>Send</button>
                </div>
            </div>
        </div>
    );
}
