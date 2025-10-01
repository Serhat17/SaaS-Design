'use client'

/**
 * Settings Page
 * Features: Profile management, theme settings, preferences, notifications
 */

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  User,
  Bell,
  Shield,
  Palette,
  Globe,
  Smartphone,
  Mail,
  Lock,
  Save,
  Edit3
} from 'lucide-react'
import Card from '@/components/Card'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import { useTheme } from '@/contexts/ThemeContext'
import { cn } from '@/lib/utils'

interface ToggleProps {
  enabled: boolean
  onChange: (enabled: boolean) => void
  label: string
  description?: string
}

function Toggle({ enabled, onChange, label, description }: ToggleProps) {
  const { theme } = useTheme()

  return (
    <div className="flex items-center justify-between py-3">
      <div>
        <div className={cn(
          "font-medium",
          theme === 'light' ? 'text-gray-900' :
          theme === 'dark' ? 'text-white' :
          'text-white'
        )}>
          {label}
        </div>
        {description && (
          <div className={cn(
            "text-sm mt-1",
            theme === 'light' ? 'text-gray-500' :
            theme === 'dark' ? 'text-gray-400' :
            'text-white/70'
          )}>
            {description}
          </div>
        )}
      </div>
      
      <motion.button
        onClick={() => onChange(!enabled)}
        className={cn(
          "relative w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
          enabled 
            ? 'bg-blue-600' 
            : theme === 'light' 
            ? 'bg-gray-200' 
            : theme === 'dark'
            ? 'bg-gray-600'
            : 'bg-white/20'
        )}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className="absolute top-1 w-4 h-4 bg-white rounded-full shadow-md"
          animate={{ x: enabled ? 24 : 2 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </motion.button>
    </div>
  )
}

export default function SettingsPage() {
  const { theme } = useTheme()
  
  // Profile state
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    title: 'Product Manager',
    bio: 'Passionate about creating exceptional user experiences and driving product growth.'
  })
  
  // Settings state
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    marketing: true,
    security: true
  })
  
  const [preferences, setPreferences] = useState({
    autoSave: true,
    darkMode: theme === 'dark',
    animations: true,
    soundEffects: false
  })

  const [isEditing, setIsEditing] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  const handleSave = async () => {
    setIsSaving(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSaving(false)
    setIsEditing(false)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={cn(
              "text-3xl font-bold",
              theme === 'light' ? 'text-gray-900' :
              theme === 'dark' ? 'text-white' :
              'text-white'
            )}
          >
            Settings
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className={cn(
              "mt-2",
              theme === 'light' ? 'text-gray-600' :
              theme === 'dark' ? 'text-gray-400' :
              'text-white/80'
            )}
          >
            Manage your account settings and preferences.
          </motion.p>
        </div>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSave}
          disabled={isSaving}
          className={cn(
            "mt-4 sm:mt-0 flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200",
            theme === 'light' 
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : theme === 'dark'
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-white/20 text-white hover:bg-white/30',
            isSaving && 'opacity-50 cursor-not-allowed'
          )}
        >
          <Save className="w-4 h-4" />
          <span>{isSaving ? 'Saving...' : 'Save Changes'}</span>
        </motion.button>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
        {/* Profile Card */}
        <motion.div variants={cardVariants} className="lg:col-span-2">
          <Card 
            icon={<User className="w-5 h-5" />}
            title="Profile Information"
            subtitle="Update your personal details"
          >
            <div className="space-y-6">
              {/* Avatar */}
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {profile.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <button className={cn(
                    "text-sm px-3 py-1 rounded-lg transition-colors duration-200",
                    theme === 'light' 
                      ? 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                      : theme === 'dark'
                      ? 'bg-blue-900/30 text-blue-400 hover:bg-blue-900/50'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  )}>
                    Change Avatar
                  </button>
                </div>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className={cn(
                    "block text-sm font-medium mb-2",
                    theme === 'light' ? 'text-gray-700' :
                    theme === 'dark' ? 'text-gray-300' :
                    'text-white/90'
                  )}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    disabled={!isEditing}
                    className={cn(
                      "w-full px-3 py-2 rounded-lg border transition-colors duration-200",
                      isEditing 
                        ? 'focus:outline-none focus:ring-2 focus:ring-blue-500'
                        : 'cursor-not-allowed',
                      theme === 'light' 
                        ? 'bg-white border-gray-300 text-gray-900'
                        : theme === 'dark'
                        ? 'bg-gray-700 border-gray-600 text-white'
                        : 'bg-white/10 border-white/20 text-white'
                    )}
                  />
                </div>
                
                <div>
                  <label className={cn(
                    "block text-sm font-medium mb-2",
                    theme === 'light' ? 'text-gray-700' :
                    theme === 'dark' ? 'text-gray-300' :
                    'text-white/90'
                  )}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    disabled={!isEditing}
                    className={cn(
                      "w-full px-3 py-2 rounded-lg border transition-colors duration-200",
                      isEditing 
                        ? 'focus:outline-none focus:ring-2 focus:ring-blue-500'
                        : 'cursor-not-allowed',
                      theme === 'light' 
                        ? 'bg-white border-gray-300 text-gray-900'
                        : theme === 'dark'
                        ? 'bg-gray-700 border-gray-600 text-white'
                        : 'bg-white/10 border-white/20 text-white'
                    )}
                  />
                </div>
              </div>

              <div>
                <label className={cn(
                  "block text-sm font-medium mb-2",
                  theme === 'light' ? 'text-gray-700' :
                  theme === 'dark' ? 'text-gray-300' :
                  'text-white/90'
                )}>
                  Job Title
                </label>
                <input
                  type="text"
                  value={profile.title}
                  onChange={(e) => setProfile({ ...profile, title: e.target.value })}
                  disabled={!isEditing}
                  className={cn(
                    "w-full px-3 py-2 rounded-lg border transition-colors duration-200",
                    isEditing 
                      ? 'focus:outline-none focus:ring-2 focus:ring-blue-500'
                      : 'cursor-not-allowed',
                    theme === 'light' 
                      ? 'bg-white border-gray-300 text-gray-900'
                      : theme === 'dark'
                      ? 'bg-gray-700 border-gray-600 text-white'
                      : 'bg-white/10 border-white/20 text-white'
                  )}
                />
              </div>

              <div>
                <label className={cn(
                  "block text-sm font-medium mb-2",
                  theme === 'light' ? 'text-gray-700' :
                  theme === 'dark' ? 'text-gray-300' :
                  'text-white/90'
                )}>
                  Bio
                </label>
                <textarea
                  rows={3}
                  value={profile.bio}
                  onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                  disabled={!isEditing}
                  className={cn(
                    "w-full px-3 py-2 rounded-lg border transition-colors duration-200 resize-none",
                    isEditing 
                      ? 'focus:outline-none focus:ring-2 focus:ring-blue-500'
                      : 'cursor-not-allowed',
                    theme === 'light' 
                      ? 'bg-white border-gray-300 text-gray-900'
                      : theme === 'dark'
                      ? 'bg-gray-700 border-gray-600 text-white'
                      : 'bg-white/10 border-white/20 text-white'
                  )}
                />
              </div>

              <button
                onClick={() => setIsEditing(!isEditing)}
                className={cn(
                  "flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-200",
                  theme === 'light' 
                    ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    : theme === 'dark'
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    : 'bg-white/10 text-white hover:bg-white/15'
                )}
              >
                <Edit3 className="w-4 h-4" />
                <span>{isEditing ? 'Cancel' : 'Edit Profile'}</span>
              </button>
            </div>
          </Card>
        </motion.div>

        {/* Theme Settings */}
        <motion.div variants={cardVariants}>
          <Card 
            icon={<Palette className="w-5 h-5" />}
            title="Appearance"
            subtitle="Customize your interface"
          >
            <ThemeSwitcher orientation="vertical" showLabels={false} />
          </Card>
        </motion.div>

        {/* Notification Settings */}
        <motion.div variants={cardVariants}>
          <Card 
            icon={<Bell className="w-5 h-5" />}
            title="Notifications"
            subtitle="Manage your notification preferences"
          >
            <div className="space-y-1">
              <Toggle
                enabled={notifications.email}
                onChange={(enabled) => setNotifications({ ...notifications, email: enabled })}
                label="Email Notifications"
                description="Receive updates via email"
              />
              <Toggle
                enabled={notifications.push}
                onChange={(enabled) => setNotifications({ ...notifications, push: enabled })}
                label="Push Notifications"
                description="Browser push notifications"
              />
              <Toggle
                enabled={notifications.marketing}
                onChange={(enabled) => setNotifications({ ...notifications, marketing: enabled })}
                label="Marketing Emails"
                description="Product updates and news"
              />
              <Toggle
                enabled={notifications.security}
                onChange={(enabled) => setNotifications({ ...notifications, security: enabled })}
                label="Security Alerts"
                description="Account security notifications"
              />
            </div>
          </Card>
        </motion.div>

        {/* Preferences */}
        <motion.div variants={cardVariants}>
          <Card 
            icon={<Shield className="w-5 h-5" />}
            title="Preferences"
            subtitle="App behavior settings"
          >
            <div className="space-y-1">
              <Toggle
                enabled={preferences.autoSave}
                onChange={(enabled) => setPreferences({ ...preferences, autoSave: enabled })}
                label="Auto Save"
                description="Automatically save changes"
              />
              <Toggle
                enabled={preferences.animations}
                onChange={(enabled) => setPreferences({ ...preferences, animations: enabled })}
                label="Animations"
                description="Enable UI animations"
              />
              <Toggle
                enabled={preferences.soundEffects}
                onChange={(enabled) => setPreferences({ ...preferences, soundEffects: enabled })}
                label="Sound Effects"
                description="UI sound feedback"
              />
            </div>
          </Card>
        </motion.div>

        {/* Security */}
        <motion.div variants={cardVariants}>
          <Card 
            icon={<Lock className="w-5 h-5" />}
            title="Security"
            subtitle="Account security options"
          >
            <div className="space-y-4">
              <button className={cn(
                "w-full text-left p-3 rounded-lg border transition-colors duration-200",
                theme === 'light' 
                  ? 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  : theme === 'dark'
                  ? 'border-gray-600 hover:border-gray-500 hover:bg-gray-700'
                  : 'border-white/20 hover:border-white/30 hover:bg-white/5'
              )}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Change Password</div>
                    <div className={cn(
                      "text-sm",
                      theme === 'light' ? 'text-gray-500' :
                      theme === 'dark' ? 'text-gray-400' :
                      'text-white/70'
                    )}>
                      Update your account password
                    </div>
                  </div>
                  <Lock className="w-4 h-4" />
                </div>
              </button>

              <button className={cn(
                "w-full text-left p-3 rounded-lg border transition-colors duration-200",
                theme === 'light' 
                  ? 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  : theme === 'dark'
                  ? 'border-gray-600 hover:border-gray-500 hover:bg-gray-700'
                  : 'border-white/20 hover:border-white/30 hover:bg-white/5'
              )}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Two-Factor Auth</div>
                    <div className={cn(
                      "text-sm",
                      theme === 'light' ? 'text-gray-500' :
                      theme === 'dark' ? 'text-gray-400' :
                      'text-white/70'
                    )}>
                      Enable additional security
                    </div>
                  </div>
                  <Smartphone className="w-4 h-4" />
                </div>
              </button>

              <button className={cn(
                "w-full text-left p-3 rounded-lg border transition-colors duration-200",
                theme === 'light' 
                  ? 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  : theme === 'dark'
                  ? 'border-gray-600 hover:border-gray-500 hover:bg-gray-700'
                  : 'border-white/20 hover:border-white/30 hover:bg-white/5'
              )}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Login Sessions</div>
                    <div className={cn(
                      "text-sm",
                      theme === 'light' ? 'text-gray-500' :
                      theme === 'dark' ? 'text-gray-400' :
                      'text-white/70'
                    )}>
                      Manage active sessions
                    </div>
                  </div>
                  <Globe className="w-4 h-4" />
                </div>
              </button>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}
