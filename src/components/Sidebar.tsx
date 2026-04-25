import { MessageSquare, Plus, Clock, Star, Trash2, FolderOpen } from 'lucide-react'
import { useState } from 'react'

interface Chat {
  id: string
  title: string
  timestamp: string
  starred?: boolean
}

const Sidebar = () => {
  const [chats] = useState<Chat[]>([
    { id: '1', title: '数据分析报告', timestamp: '2小时前', starred: true },
    { id: '2', title: '代码优化建议', timestamp: '昨天' },
    { id: '3', title: '项目需求文档', timestamp: '2天前' },
    { id: '4', title: '会议纪要总结', timestamp: '3天前' },
  ])

  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* 新建对话 */}
      <div className="p-4 border-b">
        <button className="w-full btn-primary flex items-center justify-center gap-2">
          <Plus className="w-5 h-5" />
          新建对话
        </button>
      </div>

      {/* 对话列表 */}
      <div className="flex-1 overflow-y-auto p-3">
        <div className="mb-4">
          <div className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-gray-500 uppercase">
            <Clock className="w-4 h-4" />
            最近对话
          </div>
          <div className="space-y-1">
            {chats.map((chat) => (
              <button
                key={chat.id}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors group text-left"
              >
                <MessageSquare className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-700 truncate">{chat.title}</p>
                  <p className="text-xs text-gray-500">{chat.timestamp}</p>
                </div>
                {chat.starred && <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 flex-shrink-0" />}
                <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <Trash2 className="w-4 h-4 text-gray-400 hover:text-red-500" />
                </button>
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-gray-500 uppercase">
            <FolderOpen className="w-4 h-4" />
            收藏夹
          </div>
          <div className="space-y-1">
            {chats.filter(c => c.starred).map((chat) => (
              <button
                key={chat.id}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors text-left"
              >
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-700 truncate">{chat.title}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 底部信息 */}
      <div className="p-4 border-t bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="text-xs text-gray-600 mb-2">
          <p className="font-medium">本月使用量</p>
          <div className="flex justify-between mt-1">
            <span>对话次数</span>
            <span className="font-semibold">128 / 1000</span>
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 h-1.5 rounded-full" style={{ width: '12.8%' }}></div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
