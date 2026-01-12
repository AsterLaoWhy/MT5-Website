import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

const PerformanceChart = ({ data, title }) => {
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-terminal-dark/95 border border-profit-green/50 p-3 backdrop-blur-sm">
          <p className="font-mono text-xs text-terminal-muted mb-1">{payload[0].payload.month}</p>
          <p className="font-mono text-lg text-profit-green font-bold">
            ${payload[0].value.toLocaleString()}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-terminal-dark/80 border border-terminal-border p-6">
      {title && (
        <h4 className="font-mono text-sm text-terminal-muted mb-4 tracking-wider">
          {title}
        </h4>
      )}
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="balanceGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00ff88" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#00ff88" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis 
            dataKey="month" 
            stroke="#9ca3af"
            style={{ fontSize: '11px', fontFamily: 'Space Mono, monospace' }}
            tick={{ fill: '#9ca3af' }}
          />
          <YAxis 
            stroke="#9ca3af"
            style={{ fontSize: '11px', fontFamily: 'Space Mono, monospace' }}
            tick={{ fill: '#9ca3af' }}
            tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="balance"
            stroke="#00ff88"
            strokeWidth={2}
            fill="url(#balanceGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
      
      <div className="mt-4 grid grid-cols-3 gap-4 text-center">
        <div>
          <div className="font-mono text-xs text-terminal-muted mb-1">INITIAL</div>
          <div className="font-mono text-lg text-white">
            ${data[0]?.balance.toLocaleString()}
          </div>
        </div>
        <div>
          <div className="font-mono text-xs text-terminal-muted mb-1">FINAL</div>
          <div className="font-mono text-lg text-profit-green font-bold">
            ${data[data.length - 1]?.balance.toLocaleString()}
          </div>
        </div>
        <div>
          <div className="font-mono text-xs text-terminal-muted mb-1">GROWTH</div>
          <div className="font-mono text-lg text-profit-green font-bold">
            +{(((data[data.length - 1]?.balance - data[0]?.balance) / data[0]?.balance) * 100).toFixed(1)}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceChart;
