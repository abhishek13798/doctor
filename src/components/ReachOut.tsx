import React from 'react';
import { Mail, MessageCircle, Phone, Globe } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

const ReachOut: React.FC = () => (
  <section id="reachout" className="relative py-16 sm:py-20 bg-gradient-to-b from-white to-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Let's{' '}
          <span className="bg-gradient-to-r from-primary via-[var(--kunj-java)] to-primary bg-clip-text text-transparent">
            Work Together
          </span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Reach out to schedule your first consultation or organise a workshop. We're here to support your mental health journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="text-center">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-[var(--kunj-java)] flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="h-6 w-6 text-white" />
            </div>
            <CardTitle className="text-lg">WhatsApp</CardTitle>
            <CardDescription>Quick Chat</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button
              asChild
              variant="outline"
              className="w-full"
            >
              <a href="https://wa.me/919103034279" target="_blank" rel="noopener noreferrer">
                Chat Now
              </a>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="text-center">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-[var(--kunj-java)] flex items-center justify-center mx-auto mb-4">
              <Mail className="h-6 w-6 text-white" />
            </div>
            <CardTitle className="text-lg">Email</CardTitle>
            <CardDescription>Send Message</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button
              asChild
              variant="outline"
              className="w-full"
            >
              <a href="mailto:kunjcare@gmail.com">
                Send Email
              </a>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="text-center">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-[var(--kunj-java)] flex items-center justify-center mx-auto mb-4">
              <Phone className="h-6 w-6 text-white" />
            </div>
            <CardTitle className="text-lg">Phone</CardTitle>
            <CardDescription>Call Us</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm font-medium text-foreground">+91-9103034279</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="text-center">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-[var(--kunj-java)] flex items-center justify-center mx-auto mb-4">
              <Globe className="h-6 w-6 text-white" />
            </div>
            <CardTitle className="text-lg">Website</CardTitle>
            <CardDescription>Visit Us</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button
              asChild
              variant="ghost"
              className="w-full"
            >
              <a href="https://www.kunjcare.com" target="_blank" rel="noopener noreferrer">
                www.kunjcare.com
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <Card className="bg-gradient-to-r from-primary/5 to-[var(--kunj-java)]/5 border-primary/20">
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">
              <strong>Ms. Rimjhim</strong> • Licensed Clinical Psychologist (RCI) • Available for consultations
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

export default ReachOut;
