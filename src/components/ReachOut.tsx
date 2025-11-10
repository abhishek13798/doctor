import React, { useState } from 'react';
import { Mail, MessageCircle, Phone, Copy, Check, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';

const ReachOut: React.FC = () => {
  const [emailOpen, setEmailOpen] = useState(false);
  const [phoneOpen, setPhoneOpen] = useState(false);
  const [whatsappOpen, setWhatsappOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);

  const email = 'kunjcare@gmail.com';
  const phone = '+91-9103034279';
  const whatsappNumber = '919103034279';
  const whatsappMessage = encodeURIComponent(
    'Hello! I would like to schedule a consultation with Ms. Rimjhim. Could you please provide me with available appointment times?'
  );

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } else {
      setPhoneCopied(true);
      setTimeout(() => setPhoneCopied(false), 2000);
    }
  };

  const handleWhatsAppConfirm = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
    setWhatsappOpen(false);
  };

  return (
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* WhatsApp Card */}
          <Card 
            className="hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105 group"
            onClick={() => setWhatsappOpen(true)}
          >
            <CardHeader className="text-center">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-[var(--kunj-java)] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-lg">WhatsApp</CardTitle>
              <CardDescription>Quick Chat</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button
                variant="outline"
                className="w-full"
              >
                Chat Now
              </Button>
            </CardContent>
          </Card>

          {/* Email Card */}
          <Card 
            className="hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105 group"
            onClick={() => setEmailOpen(true)}
          >
            <CardHeader className="text-center">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-[var(--kunj-java)] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-lg">Email</CardTitle>
              <CardDescription>Send Message</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button
                variant="outline"
                className="w-full"
              >
                Send Email
              </Button>
            </CardContent>
          </Card>

          {/* Phone Card */}
          <Card 
            className="hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105 group"
            onClick={() => setPhoneOpen(true)}
          >
            <CardHeader className="text-center">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-[var(--kunj-java)] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-lg">Phone</CardTitle>
              <CardDescription>Call Us</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{phone}</p>
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

      {/* Email Dialog */}
      <Dialog open={emailOpen} onOpenChange={setEmailOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-[var(--kunj-java)] flex items-center justify-center">
                <Mail className="h-5 w-5 text-white" />
              </div>
              <DialogTitle>Contact via Email</DialogTitle>
            </div>
            <DialogDescription>
              Send us an email to schedule your consultation or ask any questions.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="flex items-center justify-between p-4 bg-muted rounded-lg border-2 border-primary/20">
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">Email Address</p>
                <p className="text-lg font-semibold text-foreground break-all">{email}</p>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="ml-4"
                onClick={() => copyToClipboard(email, 'email')}
              >
                {emailCopied ? (
                  <Check className="h-4 w-4 text-primary" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
          <DialogFooter className="flex-col sm:flex-row gap-2">
            <Button
              variant="outline"
              onClick={() => setEmailOpen(false)}
            >
              Close
            </Button>
            <Button
              onClick={() => {
                window.location.href = `mailto:${email}`;
                setEmailOpen(false);
              }}
              className="bg-gradient-to-r from-primary to-[var(--kunj-java)] flex items-center justify-center"
            >
              <Mail className="mr-2 h-4 w-4 flex-shrink-0" />
              Open Email Client
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Phone Dialog */}
      <Dialog open={phoneOpen} onOpenChange={setPhoneOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-[var(--kunj-java)] flex items-center justify-center">
                <Phone className="h-5 w-5 text-white" />
              </div>
              <DialogTitle>Contact via Phone</DialogTitle>
            </div>
            <DialogDescription>
              Call us directly to speak with Ms. Rimjhim or schedule an appointment.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="flex items-center justify-between p-4 bg-muted rounded-lg border-2 border-primary/20">
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">Phone Number</p>
                <p className="text-lg font-semibold text-foreground">{phone}</p>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="ml-4"
                onClick={() => copyToClipboard(phone, 'phone')}
              >
                {phoneCopied ? (
                  <Check className="h-4 w-4 text-primary" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
          <DialogFooter className="flex-col sm:flex-row gap-2">
            <Button
              variant="outline"
              onClick={() => setPhoneOpen(false)}
            >
              Close
            </Button>
            <Button
              onClick={() => {
                window.location.href = `tel:${phone}`;
                setPhoneOpen(false);
              }}
              className="bg-gradient-to-r from-primary to-[var(--kunj-java)] flex items-center justify-center"
            >
              <Phone className="mr-2 h-4 w-4 flex-shrink-0" />
              Call Now
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* WhatsApp Dialog */}
      <Dialog open={whatsappOpen} onOpenChange={setWhatsappOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-[var(--kunj-java)] flex items-center justify-center">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <DialogTitle>Connect on WhatsApp</DialogTitle>
            </div>
            <DialogDescription>
              We'll open WhatsApp with a pre-written message. You can edit it before sending.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="p-4 bg-muted rounded-lg border-2 border-primary/20 mb-4">
              <p className="text-sm text-muted-foreground mb-2">Pre-written Message:</p>
              <p className="text-sm text-foreground leading-relaxed">
                "Hello! I would like to schedule a consultation with Ms. Rimjhim. Could you please provide me with available appointment times?"
              </p>
            </div>
            <div className="flex items-center gap-2 p-3 bg-primary/5 rounded-lg">
              <MessageCircle className="h-4 w-4 text-primary" />
              <p className="text-sm text-muted-foreground">
                Clicking "Connect on WhatsApp" will open WhatsApp with this message ready to send.
              </p>
            </div>
          </div>
          <DialogFooter className="flex-col sm:flex-row gap-2">
            <Button
              variant="outline"
              onClick={() => setWhatsappOpen(false)}
            >
              Cancel
            </Button>
            <Button
              onClick={handleWhatsAppConfirm}
              className="bg-gradient-to-r from-primary to-[var(--kunj-java)] flex items-center justify-center"
            >
              <ExternalLink className="mr-2 h-4 w-4 flex-shrink-0" />
              Connect on WhatsApp
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ReachOut;
