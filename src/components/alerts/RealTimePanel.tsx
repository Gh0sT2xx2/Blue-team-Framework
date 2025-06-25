import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, Shield, Activity } from 'lucide-react';

interface Alert {
  id: string;
  type: 'malware' | 'script' | 'connection';
  message: string;
  details: string;
  timestamp: Date;
}

const malwareAlerts = [
  "Detected Emotet trojan dropper (MD5: a2d5a4e5f8b9c1d7)",
  "RedLine Stealer malware attempting connection to C2",
  "Potential Cobalt Strike beacon detected (Port 4444)",
  "Agent Tesla keylogger signature identified",
  "AsyncRAT detected in user downloads",
  "STOP Ransomware encryption behavior detected",
  "Formbook malware attempting registry modification"
];

const scriptAlerts = [
  "Suspicious PowerShell execution: Invoke-Expression (IEX) detected",
  "PowerShell attempting to disable Windows Defender",
  "Base64 encoded PowerShell script execution",
  "PowerShell attempting to modify startup registry",
  "Suspicious script: New-Object Net.WebClient detected",
  "PowerShell attempting to create scheduled task",
  "Obfuscated PowerShell command detected"
];

const connectionAlerts = [
  "Suspicious outbound connection to known C2 server",
  "Multiple failed authentication attempts from 192.168.1.155",
  "DNS request to known malicious domain blocked",
  "Unusual port scanning activity detected",
  "Large data transfer to unknown external IP"
];

export const RealTimePanel = () => {
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [stats, setStats] = useState({
    threatsDetected: 0,
    incidentsResolved: 0,
    activeMonitors: 0
  });

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      const randomNumber = Math.random();
      let newAlert: Alert | null = null;

      if (randomNumber < 0.4) {
        const alert = malwareAlerts[Math.floor(Math.random() * malwareAlerts.length)];
        newAlert = {
          id: Date.now().toString(),
          type: 'malware',
          message: alert,
          details: `Process: ${Math.random().toString(36).substring(7)}.exe`,
          timestamp: new Date()
        };
      } else if (randomNumber < 0.7) {
        const alert = scriptAlerts[Math.floor(Math.random() * scriptAlerts.length)];
        newAlert = {
          id: Date.now().toString(),
          type: 'script',
          message: alert,
          details: `User: ${['Administrator', 'System', 'JohnDoe'][Math.floor(Math.random() * 3)]}`,
          timestamp: new Date()
        };
      } else {
        const alert = connectionAlerts[Math.floor(Math.random() * connectionAlerts.length)];
        newAlert = {
          id: Date.now().toString(),
          type: 'connection',
          message: alert,
          details: `Source IP: ${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`,
          timestamp: new Date()
        };
      }

      if (newAlert) {
        setAlerts(prev => [newAlert!, ...prev].slice(0, 5));
        setStats(prev => ({
          ...prev,
          threatsDetected: prev.threatsDetected + 1,
          activeMonitors: 15 + Math.floor(Math.random() * 5)
        }));
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      <div className="grid gap-4">
        <motion.div
          className="p-4 rounded-lg border border-[#00FF00]/20 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h3 className="font-orbitron text-lg mb-3 text-[#00FF00]">Real-time Statistics</h3>
          <div className="space-y-2 font-fira-code text-sm text-[#00FF00]/90">
            <p>Threats Detected: {stats.threatsDetected}</p>
            <p>Incidents Resolved: {stats.incidentsResolved}</p>
            <p>Active Monitors: {stats.activeMonitors}</p>
          </div>
        </motion.div>

        <div className="p-4 rounded-lg border border-[#00FF00]/20 backdrop-blur-sm">
          <h3 className="font-orbitron text-lg mb-3 text-[#00FF00]">Recent Alerts</h3>
          <div className="space-y-3">
            <AnimatePresence>
              {alerts.map(alert => (
                <motion.div
                  key={alert.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="flex items-start gap-2 text-sm"
                >
                  {alert.type === 'malware' ? (
                    <Shield className="w-4 h-4 text-[#00FF00] shrink-0 mt-1" />
                  ) : alert.type === 'script' ? (
                    <AlertCircle className="w-4 h-4 text-[#00FF00] shrink-0 mt-1" />
                  ) : (
                    <Activity className="w-4 h-4 text-[#00FF00] shrink-0 mt-1" />
                  )}
                  <div>
                    <p className="text-[#00FF00] font-medium">{alert.message}</p>
                    <p className="text-[#00FF00]/70 text-xs">{alert.details}</p>
                    <p className="text-[#00FF00]/50 text-xs">
                      {alert.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealTimePanel;