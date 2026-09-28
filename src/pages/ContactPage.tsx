import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Container } from '../components/common/Container';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { COMPANY_INFO } from '../data/company';
import { PRODUCT_CATEGORIES } from '../data/categories';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, Box, Clock, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

// Zod Validation Schema
const quoteSchema = z.object({
  fullName: z.string().min(2, 'Contact name must be at least 2 characters'),
  companyName: z.string().min(2, 'Company name is required for B2B trade inquiries'),
  businessEmail: z.string().email('Please provide a valid corporate email'),
  phoneNumber: z.string().min(6, 'Please provide an active phone or WhatsApp number'),
  country: z.string().min(2, 'Destination country is required'),
  destinationPort: z.string().optional(),
  productCategory: z.string().min(1, 'Please select an appliance category'),
  orderVolume: z.string().min(1, 'Please specify projected container quantity'),
  tradeTerm: z.string().min(1, 'Please select preferred Incoterms'),
  message: z.string().min(10, 'Please share model specifics, target specs, or questions (min 10 characters)'),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const prefillModel = searchParams.get('model');
  const prefillCategory = searchParams.get('category');

  const [submitted, setSubmitted] = useState(false);
  const [inquiryCode, setInquiryCode] = useState('');

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      fullName: '',
      companyName: '',
      businessEmail: '',
      phoneNumber: '',
      country: '',
      destinationPort: '',
      productCategory: prefillCategory || 'Refrigeration & Freezers',
      orderVolume: '1x 40HQ Container',
      tradeTerm: 'CIF (Cost, Insurance & Freight)',
      message: prefillModel
        ? `Inquiring for container volume quotation regarding model code: ${prefillModel}. Please provide FOB & CIF unit pricing and lead times.`
        : '',
    },
  });

  useEffect(() => {
    if (prefillCategory) {
      setValue('productCategory', prefillCategory);
    }
    if (prefillModel) {
      setValue(
        'message',
        `Inquiring for container volume quotation regarding model code: ${prefillModel}. Please provide FOB & CIF unit pricing and lead times.`
      );
    }
  }, [prefillCategory, prefillModel, setValue]);

  const onSubmit = (data: QuoteFormData) => {
    // Generate inquiry reference number
    const code = 'AT-RFQ-' + Math.floor(100000 + Math.random() * 900000);
    setInquiryCode(code);
    setSubmitted(true);
    // In production this connects to API or CRM
    console.log('Submitted B2B RFQ:', { ...data, inquiryCode: code });
  };

  return (
    <div className="py-12 bg-brand-gray-bg min-h-screen">
      <Container size="xl">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <Badge variant="blue" className="mb-3">
            B2B Commercial Inquiry
          </Badge>
          <h1 className="font-heading font-semibold text-3xl sm:text-4xl text-brand-blue-navy tracking-tight">
            Request Container Pricing & Sourcing Dossier
          </h1>
          <p className="text-base text-brand-gray-muted mt-2">
            Connect directly with our international appliance trading coordinators. Receive a transparent price breakdown, AQL II inspection framework, and vessel sailing options within 24 to 48 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Form Card */}
          <div className="lg:col-span-8">
            <div className="rounded-3xl bg-white p-6 sm:p-10 border border-brand-gray-border/80 shadow-card">
              
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  
                  <h3 className="font-heading font-semibold text-2xl text-brand-blue-navy">
                    Trade Inquiry Submitted Successfully
                  </h3>
                  
                  <p className="text-xs text-brand-gray-muted max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to Meet Appliances. Your inquiry dossier has been assigned to our senior appliance procurement team.
                  </p>

                  <div className="inline-block p-4 rounded-2xl bg-brand-gray-bg border border-brand-gray-border text-center">
                    <span className="text-[11px] uppercase font-bold text-brand-gray-muted tracking-wider block">
                      Inquiry Tracking Reference:
                    </span>
                    <span className="font-mono font-bold text-base text-brand-blue">{inquiryCode}</span>
                  </div>

                  <div className="pt-6">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setSubmitted(false);
                        reset();
                      }}
                    >
                      Submit Another Trade Inquiry
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold text-brand-blue-navy mb-2">
                        Contact Person Name *
                      </label>
                      <input
                        type="text"
                        {...register('fullName')}
                        placeholder="e.g. David Mueller"
                        className={`w-full px-4 py-2.5 rounded-xl border text-xs text-brand-blue-navy focus:outline-none transition-all ${
                          errors.fullName ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-brand-gray-border focus:border-brand-blue'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-red-500 mt-1">{errors.fullName.message}</p>
                      )}
                    </div>

                    {/* Company Name */}
                    <div>
                      <label className="block text-xs font-bold text-brand-blue-navy mb-2">
                        Company / Importer Name *
                      </label>
                      <input
                        type="text"
                        {...register('companyName')}
                        placeholder="e.g. EuroTech Appliances Ltd."
                        className={`w-full px-4 py-2.5 rounded-xl border text-xs text-brand-blue-navy focus:outline-none transition-all ${
                          errors.companyName ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-brand-gray-border focus:border-brand-blue'
                        }`}
                      />
                      {errors.companyName && (
                        <p className="text-[11px] text-red-500 mt-1">{errors.companyName.message}</p>
                      )}
                    </div>

                    {/* Corporate Email */}
                    <div>
                      <label className="block text-xs font-bold text-brand-blue-navy mb-2">
                        Corporate Email Address *
                      </label>
                      <input
                        type="email"
                        {...register('businessEmail')}
                        placeholder="procurement@company.com"
                        className={`w-full px-4 py-2.5 rounded-xl border text-xs text-brand-blue-navy focus:outline-none transition-all ${
                          errors.businessEmail ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-brand-gray-border focus:border-brand-blue'
                        }`}
                      />
                      {errors.businessEmail && (
                        <p className="text-[11px] text-red-500 mt-1">{errors.businessEmail.message}</p>
                      )}
                    </div>

                    {/* Phone / WhatsApp */}
                    <div>
                      <label className="block text-xs font-bold text-brand-blue-navy mb-2">
                        Phone / WhatsApp (with country code) *
                      </label>
                      <input
                        type="text"
                        {...register('phoneNumber')}
                        placeholder="+49 170 1234567"
                        className={`w-full px-4 py-2.5 rounded-xl border text-xs text-brand-blue-navy focus:outline-none transition-all ${
                          errors.phoneNumber ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-brand-gray-border focus:border-brand-blue'
                        }`}
                      />
                      {errors.phoneNumber && (
                        <p className="text-[11px] text-red-500 mt-1">{errors.phoneNumber.message}</p>
                      )}
                    </div>

                    {/* Country */}
                    <div>
                      <label className="block text-xs font-bold text-brand-blue-navy mb-2">
                        Destination Country *
                      </label>
                      <input
                        type="text"
                        {...register('country')}
                        placeholder="e.g. Germany, UAE, Brazil, Australia"
                        className={`w-full px-4 py-2.5 rounded-xl border text-xs text-brand-blue-navy focus:outline-none transition-all ${
                          errors.country ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-brand-gray-border focus:border-brand-blue'
                        }`}
                      />
                      {errors.country && (
                        <p className="text-[11px] text-red-500 mt-1">{errors.country.message}</p>
                      )}
                    </div>

                    {/* Destination Port */}
                    <div>
                      <label className="block text-xs font-bold text-brand-blue-navy mb-2">
                        Destination Port (Optional)
                      </label>
                      <input
                        type="text"
                        {...register('destinationPort')}
                        placeholder="e.g. Port of Hamburg, Jebel Ali, Santos"
                        className="w-full px-4 py-2.5 rounded-xl border border-brand-gray-border text-xs text-brand-blue-navy focus:outline-none focus:border-brand-blue transition-all"
                      />
                    </div>

                    {/* Appliance Category */}
                    <div>
                      <label className="block text-xs font-bold text-brand-blue-navy mb-2">
                        Appliance Category *
                      </label>
                      <select
                        {...register('productCategory')}
                        className="w-full px-4 py-2.5 rounded-xl border border-brand-gray-border text-xs text-brand-blue-navy focus:outline-none focus:border-brand-blue transition-all bg-white"
                      >
                        {PRODUCT_CATEGORIES.map((cat) => (
                          <option key={cat.id} value={cat.name}>
                            {cat.name}
                          </option>
                        ))}
                        <option value="Custom Mixed Container">Custom Mixed Appliance Container</option>
                      </select>
                    </div>

                    {/* Order Volume */}
                    <div>
                      <label className="block text-xs font-bold text-brand-blue-navy mb-2">
                        Projected Order Volume *
                      </label>
                      <select
                        {...register('orderVolume')}
                        className="w-full px-4 py-2.5 rounded-xl border border-brand-gray-border text-xs text-brand-blue-navy focus:outline-none focus:border-brand-blue transition-all bg-white"
                      >
                        <option value="1x 20GP Container">1x 20GP Container (Trial)</option>
                        <option value="1x 40HQ Container">1x 40HQ Container (Standard)</option>
                        <option value="2 - 5x 40HQ Containers">2 - 5x 40HQ Containers</option>
                        <option value="10+ Containers (Annual Program)">10+ Containers (Annual Contract)</option>
                        <option value="LCL Sample Consolidation">Sample / Golden Prototype Evaluation</option>
                      </select>
                    </div>

                    {/* Preferred Incoterm */}
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-brand-blue-navy mb-2">
                        Preferred Trade Term (Incoterms® 2020) *
                      </label>
                      <select
                        {...register('tradeTerm')}
                        className="w-full px-4 py-2.5 rounded-xl border border-brand-gray-border text-xs text-brand-blue-navy focus:outline-none focus:border-brand-blue transition-all bg-white"
                      >
                        <option value="CIF (Cost, Insurance & Freight)">CIF (Cost, Insurance & Freight - Recommended)</option>
                        <option value="FOB (Free on Board - Origin Port)">FOB (Free on Board - Origin Port)</option>
                        <option value="CFR (Cost and Freight)">CFR (Cost and Freight)</option>
                        <option value="DDP (Delivered Duty Paid)">DDP (Delivered Duty Paid to Warehouse)</option>
                        <option value="EXW (Ex Works)">EXW (Ex Works Factory)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message / Specifications */}
                  <div>
                    <label className="block text-xs font-bold text-brand-blue-navy mb-2">
                      Specific Requirements, Certifications, Target Pricing or Model Codes *
                    </label>
                    <textarea
                      rows={4}
                      {...register('message')}
                      placeholder="Please mention electrical specifications (voltage/Hz), desired certifications (CE, SASO, UL), custom OEM logo packaging requirements, or target FOB price..."
                      className={`w-full px-4 py-3 rounded-xl border text-xs text-brand-blue-navy focus:outline-none transition-all ${
                        errors.message ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-brand-gray-border focus:border-brand-blue'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-500 mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      glow
                      disabled={isSubmitting}
                      className="w-full justify-center"
                      icon={<Send className="w-4 h-4" />}
                    >
                      {isSubmitting ? 'Processing Trade Dossier...' : 'Submit Container Sourcing RFQ'}
                    </Button>
                  </div>

                  <p className="text-[11px] text-brand-gray-muted text-center pt-2">
                    All submitted trade data is protected by strict B2B mutual non-disclosure (NDA) protocols.
                  </p>
                </form>
              )}

            </div>
          </div>

          {/* Right Column: Direct Trade Desk Contacts */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-3xl bg-brand-blue-navy text-white p-8 border border-white/10 shadow-xl space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-green animate-pulse"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-green">
                  Trading Desk Online
                </span>
              </div>

              <h3 className="font-heading font-bold text-xl text-white">
                Global Operations Center
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed">
                Connect directly with our regional trade coordinators for urgent container bookings or OEM production scheduling.
              </p>

              <div className="space-y-4 pt-2 text-xs text-slate-200">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-[11px]">Sourcing & RFQ Desk:</span>
                    <a href={`mailto:${COMPANY_INFO.quoteEmail}`} className="font-medium hover:text-brand-green transition-colors">
                      {COMPANY_INFO.quoteEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-[11px]">Direct Trade Hotline:</span>
                    <a href={`tel:${COMPANY_INFO.phone}`} className="font-medium hover:text-brand-green transition-colors">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-[11px]">Headquarters:</span>
                    <span className="font-medium">{COMPANY_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-[11px]">Trading Hours:</span>
                    <span className="font-medium">{COMPANY_INFO.businessHours}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(COMPANY_INFO.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-white text-xs font-bold hover:bg-[#20ba59] transition-all shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp Trade Desk</span>
                </a>
              </div>
            </div>

            {/* Guarantees Box */}
            <div className="rounded-2xl bg-white p-6 border border-brand-gray-border shadow-sm space-y-3">
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-brand-blue-navy">
                Buyer Protection Standards
              </h4>
              <div className="space-y-2 text-xs text-brand-gray-text">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>ISO 2859-1 (AQL Level II) Inspection</span>
                </div>
                <div className="flex items-center gap-2">
                  <Box className="w-4 h-4 text-brand-blue shrink-0" />
                  <span>Container Loading Supervision (CLS)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                  <span>Zero-tolerance factory conflict of interest</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
};
