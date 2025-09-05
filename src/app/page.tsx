'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ShieldCheck, Lock, Globe, Timer, CircuitBoard, Database, KeyRound, FileText, PlayCircle } from 'lucide-react';

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium">{children}</span>
);

function ArchitectureSVG() {
  return (
    <svg viewBox="0 0 900 360" className="w-full h-auto">
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="40" y="24" width="250" height="90" rx="12" />
        <rect x="330" y="24" width="250" height="90" rx="12" />
        <rect x="185" y="140" width="350" height="70" rx="12" />
        <rect x="40" y="238" width="220" height="90" rx="12" />
        <rect x="330" y="238" width="220" height="90" rx="12" />
        <rect x="620" y="238" width="220" height="90" rx="12" />
      </g>
      <g fill="currentColor" fontSize="12">
        <text x="165" y="52" textAnchor="middle">User Portal</text>
        <text x="165" y="74" textAnchor="middle">React · Wallet · Consent</text>

        <text x="455" y="52" textAnchor="middle">Institution Portals</text>
        <text x="455" y="74" textAnchor="middle">Issuer · RP · Regulator</text>

        <text x="360" y="168" textAnchor="middle">API Gateway</text>
        <text x="360" y="188" textAnchor="middle">Node.js · OpenAPI · Rate limit</text>

        <text x="150" y="266" textAnchor="middle">ZK Service</text>
        <text x="150" y="286" textAnchor="middle">snarkJS · ZoKrates</text>

        <text x="440" y="266" textAnchor="middle">Permissioned Blockchain</text>
        <text x="440" y="286" textAnchor="middle">Commitments · Consent · Events</text>

        <text x="730" y="266" textAnchor="middle">Encrypted Storage (IPFS)</text>
        <text x="730" y="286" textAnchor="middle">CIDs only inside encrypted VC</text>
      </g>
      <defs>
        <marker id="arr" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
        </marker>
      </defs>
      <g stroke="currentColor" strokeWidth="1.5" fill="none" markerEnd="url(#arr)">
        <line x1="165" y1="114" x2="360" y2="140" />
        <line x1="455" y1="114" x2="360" y2="140" />
        <line x1="360" y1="210" x2="150" y2="238" />
        <line x1="360" y1="210" x2="440" y2="238" />
        <line x1="360" y1="210" x2="730" y2="238" />
        <line x1="440" y1="283" x2="150" y2="283" />
        <line x1="440" y1="283" x2="730" y2="283" />
      </g>
    </svg>
  );
}

function SequenceSVG() {
  return (
    <svg viewBox="0 0 900 320" className="w-full h-auto">
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x=" -10" y="20" width="180" height="40" rx="8" />
        <rect x="210" y="20" width="180" height="40" rx="8" />
        <rect x="430" y="20" width="180" height="40" rx="8" />
        <rect x="650" y="20" width="200" height="40" rx="8" />
        <line x1="80" y1="64" x2="80" y2="300" strokeDasharray="4 6" />
        <line x1="300" y1="64" x2="300" y2="300" strokeDasharray="4 6" />
        <line x1="520" y1="64" x2="520" y2="300" strokeDasharray="4 6" />
        <line x1="760" y1="64" x2="760" y2="300" strokeDasharray="4 6" />
      </g>
      <g fill="currentColor" fontSize="12">
        <text x="80"  y="46" textAnchor="middle">Relying Party</text>
        <text x="300" y="46" textAnchor="middle">User</text>
        <text x="520" y="46" textAnchor="middle">Wallet</text>
        <text x="750" y="46" textAnchor="middle">Verifier Contract</text>
      </g>
      <defs>
        <marker id="arr2" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
        </marker>
      </defs>
      <g stroke="currentColor" strokeWidth="1.5" fill="none" markerEnd="url(#arr2)">
        <line x1="80"  y1="110" x2="300" y2="110" />
        <line x1="300" y1="150" x2="520" y2="150" />
        <line x1="520" y1="190" x2="760" y2="190" />
        <line x1="760" y1="230" x2="80"  y2="230" />
      </g>
      <g fill="currentColor" fontSize="11">
        <text x="190" y="102" textAnchor="middle">Request attributes</text>
        <text x="410" y="142" textAnchor="middle">Consent & scope</text>
        <text x="640" y="182" textAnchor="middle">zk-proof + public signals</text>
        <text x="420" y="222" textAnchor="middle">Verification result</text>
      </g>
    </svg>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b backdrop-blur supports-[backdrop-filter]:bg-background/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-semibold tracking-tight">TrustChainKYC</span>
            <Badge className="ml-2" variant="secondary">Prototype</Badge>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#solution" className="hover:underline">Solution</a>
            <a href="#architecture" className="hover:underline">Architecture</a>
            <a href="#privacy" className="hover:underline">Privacy</a>
            <a href="/TrustChainKYC.mp4" target="_blank" rel="noopener noreferrer" className="hover:underline">Demo</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button size="sm" variant="outline" asChild>
              <a href="/whitepaper.pdf" target="_blank" rel="noopener noreferrer"><FileText className="mr-2 h-4 w-4"/>Whitepaper</a>
            </Button>
            <Button size="sm" asChild>
              <a href="/TrustChainKYC.mp4" target="_blank" rel="noopener noreferrer"><PlayCircle className="mr-2 h-4 w-4"/>View Demo</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
                Verify once, <span className="text-primary">prove many times</span> — without re-sharing documents.
              </h1>
              <p className="text-muted-foreground mt-4 max-w-xl">
                A decentralised KYC protocol for cross-border fintech. Reuse trusted attestations with selective disclosure, explicit consent, and GDPR-aligned design.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Pill><Lock className="h-3.5 w-3.5 mr-1"/> No PII on-chain</Pill>
                <Pill><ShieldCheck className="h-3.5 w-3.5 mr-1"/> zk-proof selective disclosure</Pill>
                <Pill><Globe className="h-3.5 w-3.5 mr-1"/> Cross-institution interoperability</Pill>
                <Pill><Timer className="h-3.5 w-3.5 mr-1"/> Faster onboarding</Pill>
              </div>
              <div className="mt-8 flex gap-3">
                <Button asChild><a href="/TrustChainKYC.mp4" target="_blank" rel="noopener noreferrer"><PlayCircle className="mr-2 h-4 w-4"/> Try the demo flow</a></Button>
                <Button variant="outline" asChild><a href="#architecture"><CircuitBoard className="mr-2 h-4 w-4"/> Explore architecture</a></Button>
              </div>
            </div>
            <div className="rounded-2xl p-6 border bg-card">
              <ArchitectureSVG />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution */}
      <section id="solution" className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-5">
            {[
              { icon: <KeyRound className="h-4 w-4"/>, title: "Issuance", text: "A regulated Issuer performs KYC and issues a VC. A cryptographic commitment is anchored on a permissioned chain." },
              { icon: <Lock className="h-4 w-4"/>, title: "Consent", text: "The user controls who can verify which attributes and for how long. Consent events are on-chain." },
              { icon: <ShieldCheck className="h-4 w-4"/>, title: "Selective disclosure", text: "Relying Parties request minimal facts (e.g., age≥18). A zk-proof verifies predicates without revealing raw data." },
              { icon: <Database className="h-4 w-4"/>, title: "Revocation & audit", text: "Issuers can revoke; verifiers check revocation in real time. Regulators get event transparency without PII." },
            ].map((s, i) => (
              <div key={i} className="flex gap-3">
                <div className="p-2 rounded-xl border bg-muted/40 mt-1">{s.icon}</div>
                <div>
                  <h4 className="font-medium">{s.title}</h4>
                  <p className="text-sm text-muted-foreground">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-2xl p-6 border bg-card">
            <SequenceSVG />
          </div>
        </div>
      </section>

      {/* Architecture & Privacy */}
      <section id="architecture" className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Tabs defaultValue="placement" className="w-full">
          <TabsList>
            <TabsTrigger value="placement">On-chain vs off-chain</TabsTrigger>
            <TabsTrigger value="zk">ZK predicates</TabsTrigger>
            <TabsTrigger value="contracts">Smart contracts</TabsTrigger>
          </TabsList>
          <TabsContent value="placement" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="rounded-2xl">
                <CardHeader><CardTitle className="flex items-center gap-2"><Database className="h-4 w-4"/> On-chain</CardTitle></CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-2">
                  <div>• Credential commitments (hashes)</div>
                  <div>• Consent state (scope, expiry)</div>
                  <div>• Revocation registry</div>
                  <div>• Events: Issued / Revoked / Consent / ProofVerified</div>
                </CardContent>
              </Card>
              <Card className="rounded-2xl">
                <CardHeader><CardTitle className="flex items-center gap-2"><Lock className="h-4 w-4"/> Off-chain (encrypted)</CardTitle></CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-2">
                  <div>• Verifiable Credential (VC) data</div>
                  <div>• Supporting documents (if retained)</div>
                  <div>• IPFS CIDs only inside encrypted VC</div>
                  <div>• Deletable on erasure requests</div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="zk" className="mt-6">
            <div className="grid md:grid-cols-3 gap-6">
              {["Age ≥ X (range proof)","Residency ∈ set (membership)","KYC freshness ≤ N days","Not revoked (non-membership)","Issuer signature validity","RP-bound nonce/expiry"].map((t,i)=>(
                <Card key={i} className="rounded-2xl"><CardHeader className="pb-2"><CardTitle className="text-base flex items-center gap-2"><ShieldCheck className="h-4 w-4"/>{t}</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground">Verified on-chain; no raw values revealed.</CardContent></Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="contracts" className="mt-6">
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <Card className="rounded-2xl"><CardHeader className="pb-2"><CardTitle className="text-base">KYCRegistry</CardTitle></CardHeader><CardContent className="text-muted-foreground">Issue/revoke commitments; validity checks; events.</CardContent></Card>
              <Card className="rounded-2xl"><CardHeader className="pb-2"><CardTitle className="text-base">ConsentManager</CardTitle></CardHeader><CardContent className="text-muted-foreground">Grant/revoke consent with scope+expiry; EIP-712 signatures.</CardContent></Card>
              <Card className="rounded-2xl"><CardHeader className="pb-2"><CardTitle className="text-base">Verifier</CardTitle></CardHeader><CardContent className="text-muted-foreground">On-chain zk verifier generated from circuit; emits ProofVerified.</CardContent></Card>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Privacy & Demo */}
      <section id="privacy" className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="gdpr">
            <AccordionTrigger className="text-base">GDPR mapping</AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground space-y-2">
              <div>• Art.5 minimisation: no PII on-chain; attestations only.</div>
              <div>• Art.6 lawful basis: explicit, scoped consent with expiry.</div>
              <div>• Art.17 erasure: delete encrypted blobs; non-identifying commitments remain.</div>
              <div>• Art.32 security: encryption, least privilege, audit events.</div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section id="demo" className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card className="rounded-2xl">
          <CardHeader><CardTitle>90-second demo flow</CardTitle></CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <div>1) Issuer issues VC and anchors commitment — emits <code>Issued</code>.</div>
            <div>2) User grants consent to RP — scope+expiry recorded on-chain.</div>
            <div>3) RP requests attributes; wallet returns zk-proof; <code>Verifier</code> emits <code>ProofVerified</code>.</div>
            <div>4) Issuer revokes; subsequent verifications fail with clean denial reason.</div>
          </CardContent>
        </Card>
      </section>

      <footer className="border-t py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} TrustChainKYC — Educational prototype for FT624.</p>
          <div className="flex gap-2">
            <Badge variant="secondary">DID/VC</Badge>
            <Badge variant="secondary">zk-SNARKs</Badge>
            <Badge variant="secondary">IPFS</Badge>
            <Badge variant="secondary">Fabric/Ethereum</Badge>
          </div>
        </div>
      </footer>
    </div>
  );
}
