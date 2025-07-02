import '../../src/css/Pages.css';
import React, {useEffect,useState} from 'react';
import ReactECharts from 'echarts-for-react';

const ProductManagement=() => {
    //引入表格,图表组件
    const [products, setProducts] = useState([]);
    const [statusFilter, setStatusFilter] = useState('');
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('/api/productManagement',
            { method: 'POST', 
              headers: { 'Content-Type': 'application/json' }, 
              body: JSON.stringify({ statusFilter, search }) 
            } // 发送 POST 请求，包含过滤条件
        ) // 假设你的后端接口为 /api/productManagement
            .then(res => res.json())
            .then(data => {
               console.log('产品数据:', data);
               setProducts(data);
        })
            .catch(() => setProducts([]));
    }, [statusFilter, search]);

    // 过滤后的产品
    const filteredProducts = products.filter(p =>
        (statusFilter === '' || String(p.product_status) === statusFilter) &&
        (search === '' || p.product_id.toLowerCase().includes(search.toLowerCase()))
    );

    // 散点图数据：每年上线产品数量
    const yearCount = {};
    products.forEach(p => {
        const year = new Date(p.create_time).getFullYear();
        yearCount[year] = (yearCount[year] || 0) + 1;
    });
    const scatterData = Object.entries(yearCount).map(([year, count]) => [year, count]);

    // 饼图数据：status 0/1
    const statusCount = { '0': 0, '1': 0 };
    products.forEach(p => {
        statusCount[p.product_status] = (statusCount[p.product_status] || 0) + 1;
    });
    const pieData = [
        { value: statusCount['0'], name: 'Inactive' },
        { value: statusCount['1'], name: 'Active' }
    ];

    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Product List</h2>
            {/* Filter */}
            <div className="flex mb-4 gap-4">
                <select
                    className="border rounded px-2 py-1"
                    value={statusFilter}
                    onChange={e => setStatusFilter(e.target.value)}
                >
                    <option value="">All Status</option>
                    <option value="1">Active</option>
                    <option value="0">Inactive</option>
                </select>
                <input
                    className="border rounded px-2 py-1"
                    placeholder="Search by name"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
            </div>
            {/* Table */}
            <table className="min-w-full bg-white mb-6">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">Product ID</th>
                        <th className="border px-4 py-2">Name</th>
                        <th className="border px-4 py-2">Status</th>
                        <th className="border px-4 py-2">Launch Date</th>
                        <th className="border px-4 py-2">Owner ID</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProducts.map(p => (
                        <tr key={p.product_id}>
                            <td className="border px-4 py-2">{p.product_id}</td>
                            <td className="border px-4 py-2">{p.product_name}</td>
                            <td className="border px-4 py-2">{p.product_status === 1 ? 'Active' : 'Inactive'}</td>
                            <td className="border px-4 py-2">{p.create_time}</td>
                            <td className="border px-4 py-2">{p.owner_id}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* Scatter Chart */}
            <div className="mb-6">
                <ReactECharts
                    option={{
                        title: { text: 'Products Launched Per Year' },
                        xAxis: { type: 'category', name: 'Year' },
                        yAxis: { type: 'value', name: 'Count' },
                        series: [{
                            symbolSize: 20,
                            data: scatterData,
                            type: 'scatter'
                        }]
                    }}
                    style={{ height: 300 }}
                />
            </div>
            {/* Pie Chart */}
            <div>
                <ReactECharts
                    option={{
                        title: { text: 'Product Status Distribution', left: 'center' },
                        tooltip: { trigger: 'item' },
                        legend: { orient: 'vertical', left: 'left' },
                        series: [
                            {
                                name: 'Status',
                                type: 'pie',
                                radius: '50%',
                                data: pieData,
                                emphasis: {
                                    itemStyle: { shadowBlur: 10, shadowOffsetX: 0, shadowColor: 'rgba(0, 0, 0, 0.5)' }
                                }
                            }
                        ]
                    }}
                    style={{ height: 300 }}
                />
            </div>
        </div>
    );
};

export default ProductManagement;
