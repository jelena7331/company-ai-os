import { Menu, ChevronDown, Plus } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <button onClick={() => navigate('/')} className="flex items-center gap-2">
              <div className="px-3 py-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-md">
                <span className="text-white font-bold text-lg">AI</span>
              </div>
              <span className="text-xl font-bold text-gray-900">
                LinkFox<span className="text-purple-600">.AI</span>
              </span>
            </button>

            {/* 导航菜单 */}
            <nav className="hidden lg:flex items-center gap-1">
              <button onClick={() => navigate('/')} className="px-4 py-2 text-gray-700 hover:text-purple-600 transition-colors text-sm font-medium">
                首页
              </button>
              <button className="px-4 py-2 text-gray-700 hover:text-purple-600 transition-colors text-sm font-medium">
                编辑图
              </button>
              <button className="px-4 py-2 text-gray-700 hover:text-purple-600 transition-colors text-sm font-medium">
                商品图
              </button>
              <button className="px-4 py-2 text-gray-700 hover:text-purple-600 transition-colors text-sm font-medium">
                POD素材
              </button>
              <button className="px-4 py-2 text-gray-700 hover:text-purple-600 transition-colors text-sm font-medium">
                商品图设计
              </button>
              <button className="px-4 py-2 text-gray-700 hover:text-purple-600 transition-colors text-sm font-medium">
                AI视频
              </button>
              <button className="px-4 py-2 text-gray-700 hover:text-purple-600 transition-colors text-sm font-medium">
                AI修图
              </button>
              <button className="px-4 py-2 text-gray-700 hover:text-purple-600 transition-colors text-sm font-medium">
                批量生图
              </button>
              <button onClick={() => navigate('/chat')} className="px-4 py-2 text-gray-700 hover:text-purple-600 transition-colors text-sm font-medium">
                LinkFox Agent
              </button>
              <button className="px-4 py-2 text-gray-700 hover:text-purple-600 transition-colors text-sm font-medium flex items-center gap-1">
                更多
                <ChevronDown className="w-4 h-4" />
              </button>
            </nav>
          </div>

          {/* 右侧操作 */}
          <div className="flex items-center gap-3">
            <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-md hover:from-red-600 hover:to-red-700 transition-all text-sm font-medium">
              <Plus className="w-4 h-4" />
              创建
            </button>

            <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-600 rounded-md text-sm">
              <span className="font-medium">💎 110</span>
              <button className="px-2 py-0.5 bg-blue-600 text-white rounded text-xs font-medium">
                充值
              </button>
            </div>

            <button className="w-9 h-9 rounded-full bg-purple-600 text-white flex items-center justify-center font-medium hover:bg-purple-700 transition-colors">
              U
            </button>

            <button className="lg:hidden w-9 h-9 rounded-lg hover:bg-gray-100 flex items-center justify-center transition-colors">
              <Menu className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
