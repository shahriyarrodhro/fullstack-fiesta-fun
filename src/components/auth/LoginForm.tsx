
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useApp } from '@/contexts/AppContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Eye, EyeOff, LogIn } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const { login, isLoading } = useAuth();
  const { language } = useApp();
  const navigate = useNavigate();

  const content = {
    en: {
      title: 'Welcome Back',
      subtitle: 'Sign in to your account to continue',
      email: 'Email Address',
      password: 'Password',
      signIn: 'Sign In',
      forgotPassword: 'Forgot Password?',
      noAccount: "Don't have an account?",
      signUp: 'Sign up',
      demoCredentials: 'Demo Credentials',
      demoText: 'Use these credentials to test different user roles:'
    },
    bn: {
      title: 'স্বাগতম',
      subtitle: 'চালিয়ে যেতে আপনার অ্যাকাউন্টে সাইন ইন করুন',
      email: 'ইমেইল ঠিকানা',
      password: 'পাসওয়ার্ড',
      signIn: 'সাইন ইন',
      forgotPassword: 'পাসওয়ার্ড ভুলে গেছেন?',
      noAccount: 'কোনো অ্যাকাউন্ট নেই?',
      signUp: 'সাইন আপ',
      demoCredentials: 'ডেমো ক্রেডেনশিয়াল',
      demoText: 'বিভিন্ন ব্যবহারকারীর ভূমিকা পরীক্ষা করতে এই ক্রেডেনশিয়ালগুলি ব্যবহার করুন:'
    }
  };

  const t = content[language];

  const demoCredentials = [
    { role: 'SuperAdmin', email: 'superadmin@example.com', password: 'admin123' },
    { role: 'Admin', email: 'admin@example.com', password: 'admin123' },
    { role: 'Turf Owner', email: 'turf@example.com', password: 'turf123' },
    { role: 'Player', email: 'player@example.com', password: 'player123' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const success = await login(formData.email, formData.password);
      if (success) {
        toast({
          title: "Login successful!",
          description: "Welcome back to TurfMaster",
        });
        navigate('/');
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    }
  };

  const handleDemoLogin = (email: string, password: string) => {
    setFormData({ email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <Card className="glass-card border-white/20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-white">{t.title}</CardTitle>
            <CardDescription className="text-white/70">{t.subtitle}</CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">{t.email}</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder-white/50"
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-white">{t.password}</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="bg-white/10 border-white/20 text-white placeholder-white/50 pr-10"
                    placeholder="Enter your password"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 text-white/60 hover:text-white"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              {error && (
                <Alert className="bg-destructive/10 border-destructive/20">
                  <AlertDescription className="text-destructive">{error}</AlertDescription>
                </Alert>
              )}

              <Button 
                type="submit" 
                className="w-full gradient-primary hover:opacity-90 transition-opacity"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Signing in...
                  </div>
                ) : (
                  <>
                    <LogIn className="mr-2 h-4 w-4" />
                    {t.signIn}
                  </>
                )}
              </Button>
            </form>

            <div className="text-center">
              <Link to="/forgot-password" className="text-primary hover:text-primary/80 text-sm">
                {t.forgotPassword}
              </Link>
            </div>

            <div className="text-center text-white/70">
              {t.noAccount}{' '}
              <Link to="/register" className="text-primary hover:text-primary/80">
                {t.signUp}
              </Link>
            </div>

            {/* Demo Credentials */}
            <div className="border-t border-white/20 pt-6">
              <h3 className="text-white font-medium mb-3 text-center">{t.demoCredentials}</h3>
              <p className="text-white/60 text-sm mb-4 text-center">{t.demoText}</p>
              <div className="grid grid-cols-2 gap-2">
                {demoCredentials.map((cred, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="text-xs border-white/20 text-white hover:bg-white/10"
                    onClick={() => handleDemoLogin(cred.email, cred.password)}
                  >
                    {cred.role}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginForm;
