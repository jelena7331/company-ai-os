import { useState } from 'react'
import { 
  Image, FileText, Video, Code, Database, Mail, 
  BarChart3, FileSpreadsheet, Presentation, Globe,
  Sparkles, TrendingUp, Zap, Search
} from 'lucide-react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

interface Tool {
  id: string
  name: string
  description: string
  icon: any
  color: string
  category: string
  hot?: boolean
}

const ToolsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('全部')

  const categories = ['全部', 'Agent 创作', '设计模板', 'AI 作图工具', '人物模特', '人物互动', '营销文案', '营销互动']

  const tools: Tool[] = [
    {
      id: '1',
      name: '图像生成',
      description: '基于文本描述生成高质量图像',
      icon: Image,
      color: 'from-purple-500 to-pink-500',
      category: 'AI 作图工具',
      hot: true
    },
    {
      id: '2',
      name: '文档分析',
      description: '智能分析和总结各类文档',
      icon: FileText,
      color: 'from-green-500 to-emerald-500',
      category: 'Agent 创作'
    },
    {
      id: '3',
      name: '视频处理',
      description: '视频剪辑、字幕生成和特效',
      icon: Video,
      color: 'from-indigo-500 to-purple-500',
      category: 'AI 作图工具',
      hot: true
    },
    {
      id: '4',
      name: '代码助手',
      description: '代码生成、优化和调试',
      icon: Code,
      color: 'from-orange-500 to-red-500',
      category: 'Agent 创作'
    },
    {
      id: '5',
      name: '数据分析',
      description: '数据可视化和智能分析',
      icon: Database,
      color: 'from-cyan-500 to-blue-500',
      category: 'Agent 创作'
    },
    {
      id: '6',
      name: '邮件助手',
      description: '智能撰写和管理邮件',
      icon: Mail,
      color: 'from-blue-500 to-indigo-500',
      category: '营销文案'
    },
    {
      id: '7',
      name: '数据报表',
      description: '自动生成数据报表和图表',
      icon: BarChart3,
      color: 'from-green-500 to-teal-500',
      category: 'Agent 创作'
    },
    {
      id: '8',
      name: 'Excel 处理',
      description: '表格数据处理和分析',
      icon: FileSpreadsheet,
      color: 'from-emerald-500 to-green-500',
      category: 'Agent 创作'
    },
    {
      id: '9',
      name: 'PPT 生成',
      description: '自动生成演示文稿',
      icon: Presentation,
      color: 'from-red-500 to-orange-500',
      category: '设计模板',
      hot: true
    },
    {
      id: '10',
      name: '网页抓取',
      description: '智能抓取和分析网页内容',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
      category: 'Agent 创作'
    },
    {
      id: '11',
      name: '营销文案',
      description: '生成吸引人的营销文案',
      icon: Sparkles,
      color: 'from-pink-500 to-rose-500',
      category: '营销文案',
      hot: true
    },
    {
      id: '12',
      name: '趋势分析',
      description: '市场趋势和竞品分析',
      icon: TrendingUp,
      color: 'from-violet-500 to-purple-500',
      category: 'Agent 创作'
    },
  ]

  const filteredTools = selectedCategory === '全部' 
    ? tools 
    : tools.filter(tool => tool.category === selectedCategory)

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto">
          {/* Hero Section */}
          <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-white py-16 px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4 text-gray-900">从一个想法，到全球爆单</h1>
              <p className="text-lg text-gray-600 mb-8">上传产品图，描述想要的效果，让 AI 帮您所有设计</p>
              
              <div className="flex gap-4 justify-center mb-8">
                <button className="px-6 py-3 bg-white text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-all border border-gray-300 flex items-center gap-2">
                  <Image className="w-5 h-5" />
                  添加图片
                </button>
                <button className="px-6 py-3 bg-white text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-all border border-gray-300">
                  默认比例
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all">
                  查看模型
                </button>
              </div>

              {/* 快捷工具栏 */}
              <div className="flex flex-wrap gap-3 justify-center">
                {[
                  { icon: Sparkles, text: '智能工具' },
                  { icon: Image, text: '智能修图' },
                  { icon: Video, text: '视频视觉' },
                  { icon: BarChart3, text: '商品直播' },
                  { icon: Globe, text: '带货口播' },
                  { icon: Mail, text: '商品营销' },
                  { icon: Zap, text: '批量生成' }
                ].map((item, index) => (
                  <button
                    key={index}
                    className="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-medium hover:from-purple-700 hover:to-blue-700 transition-all flex items-center gap-2 shadow-sm"
                  >
                    <item.icon className="w-4 h-4" />
                    {item.text}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 工具分类和列表 */}
          <div className="max-w-6xl mx-auto px-4 py-8">
            {/* 分类标签 */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-2xl font-bold text-gray-800">工具广场</h2>
                <div className="flex-1 max-w-md">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="搜索工具..."
                      className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-5 py-2 rounded-full font-medium transition-all ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* 工具卡片网格 */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTools.map((tool) => (
                <div
                  key={tool.id}
                  className="card p-6 hover:scale-105 transition-all duration-300 cursor-pointer group relative overflow-hidden"
                >
                  {tool.hot && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold rounded-full">
                      HOT
                    </div>
                  )}
                  
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <tool.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{tool.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{tool.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {tool.category}
                    </span>
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      使用
                      <Zap className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* 空状态 */}
            {filteredTools.length === 0 && (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-10 h-10 text-gray-400" />
                </div>
                <p className="text-gray-500">暂无相关工具</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}

export default ToolsPage
