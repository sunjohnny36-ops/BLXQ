import React from "react";
import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// 示例数据 - 转化率提升图表
const conversionData = [
  { month: '1月', before: 12, after: 28 },
  { month: '2月', before: 15, after: 32 },
  { month: '3月', before: 18, after: 38 },
  { month: '4月', before: 16, after: 42 },
  { month: '5月', before: 20, after: 45 },
  { month: '6月', before: 22, after: 50 },
];

// 合作机构logo列表
const partnerLogos = [
  "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Education%20center%20logo%20design%201&sign=22ebeff81adc31c214479224494f96fc",
  "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Education%20center%20logo%20design%202&sign=90616b7fbdb5902d77b93dc76c90e415",
  "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Education%20center%20logo%20design%203&sign=85bd01d55ea364dffa430df838849e5c",
  "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Education%20center%20logo%20design%204&sign=9b0d1fe9f105e5c5f229fd55b6865ea1",
  "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Education%20center%20logo%20design%205&sign=c3565182a7eb77e4746c2849cfba38e6",
  "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Education%20center%20logo%20design%206&sign=2589293940671168f1c30db08d148471",
];

// 客户证言
const testimonials = [
  {
    id: 1,
    name: "王校长",
    position: "某知名教育机构创始人",
    content: "使用曝力校区的模拟考试方案后，我们的到店转化率提升了300%，招生成本降低了40%。他们真的懂教培行业！",
    avatar: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Middle%20aged%20Chinese%20male%20school%20principal&sign=bf787c65d901f5009e088890fd9b234e"
  },
  {
    id: 2,
    name: "张老师",
    position: "教育培训机构运营总监",
    content: "私域运营解决方案帮我们建立了完善的家长社群体系，学员续费率提升了25%，口碑推荐率显著增加。",
    avatar: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Middle%20aged%20Chinese%20female%20education%20manager&sign=0812ab3b11dc149e70f875c7122e7e04"
  }
];

// 服务内容
const services = [
  {
    id: 1,
    title: "线下模拟考试活动",
    description: "高仿真模考活动吸引潜在学员到店体验，提升转化率",
    icon: "fa-pencil-alt",
    features: ["定制化模考试卷", "准考证设计", "专业成绩分析", "个性化报告", "到店转化流程"],
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Education%20training%20center%20students%20taking%20exam&sign=88eb87cbe6e9ab2c58162eb75d35b5a8"
  },
  {
    id: 2,
    title: "线上官网建设",
    description: "响应式设计、招生转化组件、SEO优化的教育机构专属官网",
    icon: "fa-globe",
    features: ["品牌定制设计", "招生表单优化", "课程展示系统", "SEO搜索引擎优化", "数据统计分析"],
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Modern%20education%20website%20design%20on%20devices&sign=68b7fd6ecc3d823bb7df243de8789cc5"
  },
  {
    id: 3,
    title: "私域运营解决方案",
    description: "企业微信社群搭建、自动化SOP话术、裂变引流工具",
    icon: "fa-users",
    features: ["社群运营SOP", "自动化话术", "裂变引流工具", "家长/学员生命周期管理", "数据分析报表"],
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=WeChat%20community%20management%20for%20education&sign=d55191ca93d027c493589a16803cb59e"
  }
];

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="https://lf-code-agent.coze.cn/obj/x-ai-cn/267080153346/attachment/1736302138738-ckt-抠图_20260207094538.png" 
              alt="曝力校区" 
              className="h-12 w-auto"
            />
          </motion.div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {["首页", "服务", "案例", "关于我们", "联系"].map((item) => (
            <a 
              key={item} 
              href={`#${item}`} 
              className="text-white hover:text-yellow-400 transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </nav>
        
        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block bg-yellow-400 text-black font-bold py-2 px-6 rounded-full hover:bg-yellow-500 transition-colors duration-300"
        >
          免费获取方案
        </motion.button>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-white text-xl">
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </header>
  );
};

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-20 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              让招生更简单
              <span className="text-yellow-400 block mt-2">教培机构增长引擎</span>
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              专业的线下模拟考试与线上私域运营解决方案，帮助教育机构提升转化率，降低获客成本。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 text-black font-bold py-4 px-8 rounded-full text-lg hover:bg-yellow-500 transition-colors duration-300"
              >
                免费获取方案
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-white hover:text-black transition-colors duration-300"
              >
                预约演示
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-yellow-400 rounded-2xl transform rotate-3"></div>
            <img 
              src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Education%20marketing%20strategy%20concept%20with%20graphs%20and%20charts&sign=d7000820c3a22ae097b7e8f7bbe5bc1b" 
              alt="教培机构营销解决方案" 
              className="rounded-2xl relative z-10 shadow-xl w-full"
            />
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl"></div>
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl"></div>
    </section>
  );
};

const ServicesSection = () => {
  return (
    <section id="服务" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">我们的核心服务</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            从线下活动到线上运营，全方位助力教培机构实现业绩增长
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="p-6">
                <div className="w-14 h-14 bg-yellow-400 text-black rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className={`fas ${service.icon} text-2xl`}></i>
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full bg-black text-white font-bold py-3 px-6 rounded-full hover:bg-gray-800 transition-colors duration-300"
                >
                  了解详情
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SolutionsSection = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">全方位营销解决方案</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            从流量获取到留存转化，打造完整的营销闭环
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-yellow-400 rounded-2xl transform -rotate-2"></div>
            <img 
              src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Education%20simulation%20exam%20marketing%20strategy&sign=dd1d26fb998ec82deb471b07fe0e1886" 
              alt="线下模拟考试解决方案" 
              className="rounded-2xl relative z-10 shadow-xl w-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-yellow-400">线下模拟考试解决方案</h3>
            <p className="text-lg mb-6 text-gray-300">
              通过高仿真的模拟考试活动，吸引潜在学员到店体验，提升转化率。我们提供从策划、执行到转化的全流程服务。
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-yellow-400 text-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="fas fa-file-alt"></i>
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-semibold mb-2">专业试卷设计</h4>
                  <p className="text-gray-300">根据机构课程特点定制高质量模拟试卷，真实还原考试场景</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 bg-yellow-400 text-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="fas fa-ticket-alt"></i>
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-semibold mb-2">准考证与物料</h4>
                  <p className="text-gray-300">定制化准考证、学员手册等物料，提升活动专业性与参与感</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 bg-yellow-400 text-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="fas fa-chart-line"></i>
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-semibold mb-2">数据化分析报告</h4>
                  <p className="text-gray-300">提供详细的考试数据分析与个性化成绩报告，助力转化</p>
                </div>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-8 bg-yellow-400 text-black font-bold py-3 px-8 rounded-full hover:bg-yellow-500 transition-colors duration-300"
            >
              查看成功案例
            </motion.button>
          </motion.div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-yellow-400">线上营销赋能体系</h3>
            <p className="text-lg mb-6 text-gray-300">
              构建专属官网与私域流量池，实现从流量获取到学员留存的全链路运营，提升品牌影响力与转化率。
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-yellow-400 text-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="fas fa-laptop-code"></i>
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-semibold mb-2">定制化官网建设</h4>
                  <p className="text-gray-300">响应式设计、招生转化组件、SEO优化，提升品牌形象与获客能力</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 bg-yellow-400 text-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="fas fa-weixin"></i>
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-semibold mb-2">私域流量运营</h4>
                  <p className="text-gray-300">企业微信社群搭建、自动化SOP话术、裂变引流工具，提升用户粘性</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 bg-yellow-400 text-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="fas fa-users-cog"></i>
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-semibold mb-2">生命周期管理</h4>
                  <p className="text-gray-300">家长/学员全生命周期管理，提升续费率与转介绍率</p>
                </div>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-8 bg-yellow-400 text-black font-bold py-3 px-8 rounded-full hover:bg-yellow-500 transition-colors duration-300"
            >
              了解详情
            </motion.button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-1 md:order-2"
          >
            <div className="absolute inset-0 bg-yellow-400 rounded-2xl transform rotate-2"></div>
            <img 
              src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Education%20digital%20marketing%20and%20WeChat%20private%20domain%20operation&sign=416eb3106184ebf5deffc8abc3e3b9a8" 
              alt="线上营销赋能体系" 
              className="rounded-2xl relative z-10 shadow-xl w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ResultsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">客户增长数据</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            我们的解决方案帮助数百家教育机构实现了显著的业绩增长
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6">转化率提升效果</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={conversionData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="before" 
                      name="使用前(%)" 
                      stroke="#94a3b8" 
                      strokeWidth={2} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="after" 
                      name="使用后(%)" 
                      stroke="#FFD700" 
                      strokeWidth={3} 
                      activeDot={{ r: 8 }} 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-6 text-gray-600">
                <p>平均转化率提升：<span className="text-yellow-500 font-bold text-xl">230%</span></p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-black text-white p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-300">
                <p className="text-yellow-400 text-5xl font-bold mb-2">300+</p>
                <p className="text-lg">合作机构</p>
              </div>
              <div className="bg-black text-white p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-300">
                <p className="text-yellow-400 text-5xl font-bold mb-2">230%</p>
                <p className="text-lg">平均转化率提升</p>
              </div>
              <div className="bg-black text-white p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-300">
                <p className="text-yellow-400 text-5xl font-bold mb-2">40%</p>
                <p className="text-lg">获客成本降低</p>
              </div>
              <div className="bg-black text-white p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-300">
                <p className="text-yellow-400 text-5xl font-bold mb-2">98%</p>
                <p className="text-lg">客户满意度</p>
              </div>
            </div>
            
            <div className="mt-8 bg-gray-50 p-6 rounded-2xl shadow-lg">
              <h4 className="text-xl font-bold mb-4">为什么选择我们？</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 text-xl mr-3"></i>
                  <span>专注教育行业10年+经验</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 text-xl mr-3"></i>
                  <span>数据驱动的营销解决方案</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 text-xl mr-3"></i>
                  <span>全流程服务支持</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 text-xl mr-3"></i>
                  <span>可量化的业绩增长效果</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">客户证言</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            听听我们的客户怎么说
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg relative"
            >
              <div className="text-yellow-400 text-6xl absolute -top-6 left-6">"</div>
              <p className="text-lg text-gray-700 mb-8 relative z-10">{testimonial.content}</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-xl font-bold">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PartnersSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">合作机构</h2>
          <p className="text-lg text-gray-600">
            全国数百家教育机构的共同选择
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center"
        >
          {partnerLogos.map((logo, index) => (
            <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
              <img 
                src={logo} 
                alt={`合作机构 ${index + 1}`} 
                className="h-16 w-auto object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const CtaSection = () => {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">准备好提升您的招生业绩了吗？</h2>
          <p className="text-xl mb-10 text-gray-300">
            立即获取专属营销解决方案，让您的教育机构实现指数级增长
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 text-black font-bold py-4 px-8 rounded-full text-lg hover:bg-yellow-500 transition-colors duration-300"
            >
              免费获取方案
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-white hover:text-black transition-colors duration-300"
            >
              预约演示
            </motion.button>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-yellow-400"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl"></div>
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl"></div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <img 
              src="https://lf-code-agent.coze.cn/obj/x-ai-cn/267080153346/attachment/1736302138738-ckt-抠图_20260207094538.png" 
              alt="曝力校区" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-400 mb-6">
              教培机构增长引擎，专注于为教育培训机构提供全方位营销解决方案。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                <i className="fab fa-weixin text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                <i className="fab fa-weibo text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                <i className="fab fa-youtube text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">服务项目</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">模拟考试活动</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">官网建设</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">私域运营</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">营销策划</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">数据分析</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">关于我们</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">公司简介</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">团队介绍</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">成功案例</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">新闻动态</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">加入我们</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">联系方式</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt text-yellow-400 mt-1 mr-3"></i>
                <span className="text-gray-400">上海浦东智慧产业园A座</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone text-yellow-400 mr-3"></i>
                <span className="text-gray-400">021-51626777</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope text-yellow-400 mr-3"></i>
                <span className="text-gray-400">blxq008@126.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>© 2026 曝力校区. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <SolutionsSection />
      <ResultsSection />
      <TestimonialsSection />
      <PartnersSection />
      <CtaSection />
      <Footer />
    </div>
  );
}