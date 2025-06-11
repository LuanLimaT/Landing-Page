"use client"
import { useState, useRef, useEffect } from "react"
import { useFloatingChat } from "@/hooks/useFloatingChat"
import { Message } from "@/types/floatingChat"

export default function FloatingChat() {
  const [chatOpen, setChatOpen] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const {
    messages,
    inputValue,
    setInputValue,
    isTyping,
    waitingForAgent,
    handleSend,
    connected,
  } = useFloatingChat(chatOpen)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <section>
      <button 
        onClick={() => setChatOpen((open) => !open)} 
        className="
        fixed bottom-6 right-6 z-50
        w-[4.6rem] h-[5.4rem]
        "
      >
        <img src="Chat.svg" alt="Chat Icon" className="w-full h-full"/>
        <span className="absolute inset-0 flex items-center justify-center text-white text-2xl">
          {chatOpen ? "" : ""}
        </span>
      </button>

      {chatOpen && (
        <div className="fixed bottom-28 right-6 z-50 w-80 h-96 flex flex-col ...">
          {/* Header */}
          <div className="bg-[#012437] text-white p-4 ...">
            <img src="logo.svg" alt=""  className="w-[6.6rem] h-[2.9rem] pb-[0.7rem]"/>
            <p className="text-xs">
              <span className={`inline-block w-2 h-2 rounded-full ${connected ? "bg-green-400" : "bg-red-400"}`} />
              {connected ? " Online" : " Conectando..."}
            </p>
          </div>

          {/* Mensagens */}
          <div className="flex-1 overflow-y-auto p-4 bg-[#E0E0E0] from-slate-50 to-blue-50">
            {messages.map((message: Message) => (
              <div key={message.id} className={`mb-4 ${message.isUser ? "text-right" : "text-left"}`}>
                <div className={`inline-block p-3 rounded-2xl shadow ${message.isUser ? "bg-blue-600 text-white" : "bg-white text-black"}`}>
                  <p>{message.text}</p>
                  <p className="text-xs">{message.timestamp}</p>
                </div>
              </div>
            ))}

            {isTyping && (
              <p className="text-sm text-slate-500 mb-2">Atendente está digitando...</p>
            )}
            {waitingForAgent && !isTyping && (
              <p className="text-sm text-slate-500 mb-2">Aguardando resposta...</p>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t">
            <form onSubmit={(e) => { e.preventDefault(); handleSend() }} className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1 p-2 border rounded-xl"
                placeholder="Digite sua mensagem..."
              />
              <button type="submit" className="bg-[#012437] text-white px-4 py-2 rounded-xl">Enviar</button>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}
