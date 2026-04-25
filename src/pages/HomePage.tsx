import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Image as ImageIcon, Upload, Sparkles, ArrowRight } from 'lucide-react'
import Header from '../components/Header'

const HomePage = () => {
  const navigate = useNavigate()
  const [prompt, setPrompt] = useState('')

  const handleGenerate = () => {
    if (prompt.trim()) {
      navigate('/chat', { state: { initialPrompt: prompt } })
    }
  }

  const showcaseImages = [
    { id: 1, title: '生成商品场景', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop' },
    { id: 2, title: '生成 A+详情页', image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&h=300&fit=crop' },
    { id: 3, title: '生成黄金主图', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop' },
    { id: 4, title: '多图融合', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=300&fit=crop' },
    { id: 5, title: '流体优雅', image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=300&fit=crop' },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 pt-24 pb-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
            从一个想法，到全球爆单
          </h1>
          
          <p className="text-lg text-gray-600 mb-12">
            上传产品图，描述想要的效果，让 AI 帮您所有设计
          </p>

          {/* 输入框 */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <div className="flex gap-4 mb-4">
                <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <ImageIcon className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700">添加图片</span>
                </button>
                <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Upload className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700">默认比例</span>
                </button>
                <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all shadow-sm">
                  <Sparkles className="w-5 h-5" />
                  <span>查看模型</span>
                </button>
              </div>
              
              <div className="relative">
                <input
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleGenerate()}
                  placeholder="描述您想要的效果，让 AI 帮您完成设计..."
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
                />
                <button 
                  onClick={handleGenerate}
                  className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all font-medium"
                >
                  生成
                </button>
              </div>
            </div>
          </div>

          {/* 快捷标签 */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {['商品套图 Agent', '营销套图 Agent'].map((tag, index) => (
              <button
                key={index}
                className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-all text-gray-700 text-sm"
              >
                <ArrowRight className="w-4 h-4" />
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* 展示图片 */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {showcaseImages.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer bg-gray-100 hover:shadow-lg transition-all"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-medium text-sm">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 功能标签 */}
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              '智能工具',
              '智能修图',
              '视频视觉',
              '商品直播',
              '带货口播',
              '商品营销',
              '批量生成'
            ].map((feature, index) => (
              <button
                key={index}
                className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:from-purple-700 hover:to-blue-700 transition-all font-medium text-sm shadow-sm"
              >
                {feature}
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default HomePage
