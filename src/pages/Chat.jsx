import { useState } from "react";
import { motion } from "framer-motion";

import {
  Search,
  Users,
  Crown,
  User,
  Target,
  Send,
  Paperclip,
} from "lucide-react";

import useTheme from "../hooks/useTheme";

const chatData = {
  team: [
    {
      id: 1,
      name: "Ahmed Ali",
      online: true,
      unread: 3,
      lastMessage: "Dashboard finished",
      time: "10:22 PM",
    },
  ],

  premium: [
    {
      id: 2,
      name: "Sara Mohamed",
      online: true,
      unread: 1,
      lastMessage: "Need support",
      time: "09:15 PM",
    },
  ],

  free: [
    {
      id: 3,
      name: "John Smith",
      online: false,
      unread: 0,
      lastMessage: "Thank you",
      time: "Yesterday",
    },
  ],

  leads: [
    {
      id: 4,
      name: "Company X",
      online: true,
      unread: 5,
      lastMessage: "Interested in Pro Plan",
      time: "08:10 PM",
    },
  ],
};
function Chat() {

  const { lang } = useTheme();

  const [activeCategory, setActiveCategory] =
    useState("team");

  const [searchTerm, setSearchTerm] =
    useState("");

  const [selectedChat, setSelectedChat] =
    useState(chatData.team[0]);

  const [message, setMessage] =
    useState("");

  const categories = [
    {
      id: "team",
      label: "Team",
      icon: Users,
    },
    {
      id: "premium",
      label: "Premium",
      icon: Crown,
    },
    {
      id: "free",
      label: "Free",
      icon: User,
    },
    {
      id: "leads",
      label: "Leads",
      icon: Target,
    },
  ];

return (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="space-y-6"
  >
    {/* Header */}

    <div className="relative overflow-hidden rounded-3xl border border-slate-200 dark:border-white/10 p-8 bg-gradient-to-br from-indigo-500/15 via-transparent to-cyan-500/10 backdrop-blur-xl">

      <div className="flex items-center justify-between flex-wrap gap-4">

        <div>
          <h1 className="text-4xl font-black">
            {lang === "ar"
              ? "مركز المحادثات"
              : "Chat Center"}
          </h1>

         

          <p className="text-slate-500 mt-2">
            {lang === "ar"
              ? "إدارة المحادثات والعملاء والفريق"
              : "Manage team and customer conversations"}
          </p>
        </div>




        <div className="relative">
          <Search
            size={18}
            className="
            absolute
            left-3
            top-1/2
            -translate-y-1/2
            text-slate-400
            "
          />

          <input
            type="text"
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
            placeholder="Search..."
            className="
            pl-10
            pr-4
            py-2
            w-72

            rounded-xl

            bg-white
            dark:bg-slate-900

            border
            border-slate-200
            dark:border-white/10
            "
          />
        </div>

      </div>

    </div>

    {/* Stats */}

    <div className="grid grid-cols-1 md:grid-cols-4 gap-5">

      <div className="p-6 rounded-3xl border border-indigo-500/20 bg-indigo-500/10">
        <p className="text-slate-500 text-sm">
          Total Chats
        </p>

        <h2 className="text-4xl font-black text-indigo-500 mt-2">
          196
        </h2>
      </div>

      <div className="p-6 rounded-3xl border border-amber-500/20 bg-amber-500/10">
        <p className="text-slate-500 text-sm">
          Premium
        </p>

        <h2 className="text-4xl font-black text-amber-500 mt-2">
          48
        </h2>
      </div>

      <div className="p-6 rounded-3xl border border-emerald-500/20 bg-emerald-500/10">
        <p className="text-slate-500 text-sm">
          Active
        </p>

        <h2 className="text-4xl font-black text-emerald-500 mt-2">
          23
        </h2>
      </div>

      <div className="p-6 rounded-3xl border border-red-500/20 bg-red-500/10">
        <p className="text-slate-500 text-sm">
          Unread
        </p>

        <h2 className="text-4xl font-black text-red-500 mt-2">
          14
        </h2>
      </div>

    </div>

    {/* Main Layout */}

    <div className="grid grid-cols-12 gap-6 h-[700px]">

      {/* Categories */}

      <div
        className="
        col-span-12
        lg:col-span-2

        rounded-3xl
        border

        border-slate-200
        dark:border-white/10

        bg-white
        dark:bg-slate-900

        p-4
        "
      >
       <div className="space-y-3">

  {categories.map((cat) => {

    const Icon = cat.icon;

    return (

      <button
        key={cat.id}
        onClick={() => setActiveCategory(cat.id)}
        className={`
          w-full
          flex
          items-center
          gap-3
          px-4
          py-3
          rounded-2xl
          transition-all

          ${
            activeCategory === cat.id
              ? "bg-indigo-600 text-white"
              : "hover:bg-slate-100 dark:hover:bg-white/5"
          }
        `}
      >
        <Icon size={18} />

        <span className="font-medium">
          {cat.label}
        </span>
      </button>

    );

  })}

</div>
      </div>

      {/* Conversations */}

      <div
        className="
        col-span-12
        lg:col-span-3

        rounded-3xl
        border

        border-slate-200
        dark:border-white/10

        bg-white
        dark:bg-slate-900

        p-4
        "
      >
       <div className="space-y-3 overflow-y-auto h-full">

  {chatData[activeCategory]
    ?.filter((chat) =>
      chat.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    )

    .map((chat) => (

      <button
        key={chat.id}
        onClick={() => setSelectedChat(chat)}
        className={`
          w-full
          p-4
          rounded-2xl
          text-left
          transition-all

          ${
            selectedChat?.id === chat.id
              ? "bg-indigo-600 text-white"
              : "hover:bg-slate-100 dark:hover:bg-white/5"
          }
        `}
      >

        <div className="flex justify-between">

          <h4 className="font-bold">
            {chat.name}
          </h4>

          {chat.unread > 0 && (

            <span
              className="
                min-w-[22px]
                h-[22px]
                flex
                items-center
                justify-center
                rounded-full
                bg-red-500
                text-white
                text-xs
                font-bold
              "
            >
              {chat.unread}
            </span>

          )}

        </div>

        <p
          className="
            text-xs
            opacity-70
            mt-1
          "
        >
          {chat.lastMessage}
        </p>

        <p
          className="
            text-[11px]
            opacity-50
            mt-2
          "
        >
          {chat.time}
        </p>

      </button>

    ))}

</div>
      </div>

      {/* Chat Window */}

      <div
        className="
        col-span-12
        lg:col-span-7

        rounded-3xl
        border

        border-slate-200
        dark:border-white/10

        bg-white
        dark:bg-slate-900

        p-4
        "
      >
        <div className="flex flex-col h-full">

  {/* Header */}

  <div
    className="
      pb-4
      border-b
      border-slate-200
      dark:border-white/10
    "
  >

    <h2 className="text-xl font-black">
      {selectedChat?.name}
    </h2>

    <p className="text-sm text-slate-500">
      {selectedChat?.online
        ? "Online"
        : "Offline"}
    </p>

  </div>

  {/* Messages */}

  <div
    className="
      flex-1
      overflow-y-auto
      py-6
      space-y-4
    "
  >

    <div className="flex justify-start">

      <div
        className="
          max-w-md
          px-4
          py-3
          rounded-2xl
          bg-slate-100
          dark:bg-white/5
        "
      >
        Hello 👋
      </div>

    </div>

    <div className="flex justify-end">

      <div
        className="
          max-w-md
          px-4
          py-3
          rounded-2xl
          bg-indigo-600
          text-white
        "
      >
        Hi, how can I help?
      </div>

    </div>

  </div>

  {/* Input */}

  <div
    className="
      pt-4
      border-t
      border-slate-200
      dark:border-white/10
    "
  >

    <div className="flex gap-3">

      <button
        className="
          w-11
          h-11
          rounded-xl
          border
          border-slate-200
          dark:border-white/10
          flex
          items-center
          justify-center
        "
      >
        <Paperclip size={18} />
      </button>

      <input
        value={message}
        onChange={(e) =>
          setMessage(e.target.value)
        }
        placeholder="Type a message..."
        className="
          flex-1
          h-11
          px-4
          rounded-xl
          bg-slate-100
          dark:bg-white/5
          outline-none
        "
      />

      <button
        className="
          w-11
          h-11
          rounded-xl
          bg-indigo-600
          text-white
          flex
          items-center
          justify-center
        "
      >
        <Send size={18} />
      </button>

    </div>

  </div>

</div>
      </div>

    </div>

  </motion.div>
);
  
}

export default Chat;