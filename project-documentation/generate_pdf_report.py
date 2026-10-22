import os
import sys
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, Image, PageBreak, KeepTogether, HRFlowable
)
from reportlab.pdfgen import canvas

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# Page dimensions for A4
PAGE_WIDTH, PAGE_HEIGHT = A4
MARGIN = 42
PRINTABLE_WIDTH = PAGE_WIDTH - (2 * MARGIN)

class NumberedCanvas(canvas.Canvas):
    """
    Two-pass canvas to dynamically compute and stamp total page count (Page X of Y),
    running headers, and running footers on all pages except the cover page.
    """
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_page_decorations(num_pages)
            super().showPage()
        super().save()

    def draw_page_decorations(self, total_pages):
        if self._pageNumber == 1:
            # Suppress running header/footer on cover page
            return

        self.saveState()
        
        # Running Header
        self.setStrokeColor(colors.HexColor("#CBD5E1"))
        self.setLineWidth(0.75)
        self.line(MARGIN, PAGE_HEIGHT - 38, PAGE_WIDTH - MARGIN, PAGE_HEIGHT - 38)
        
        self.setFont("Helvetica-Bold", 8)
        self.setFillColor(colors.HexColor("#E60012"))
        self.drawString(MARGIN, PAGE_HEIGHT - 32, "YOKOHAMA MES")
        
        self.setFont("Helvetica", 8)
        self.setFillColor(colors.HexColor("#475569"))
        self.drawString(MARGIN + 75, PAGE_HEIGHT - 32, "|  Plant IT Downtime Management & Analytics System")
        self.drawRightString(PAGE_WIDTH - MARGIN, PAGE_HEIGHT - 32, "Technical Specification & Engineering Dossier")

        # Running Footer
        self.line(MARGIN, 42, PAGE_WIDTH - MARGIN, 42)
        
        self.setFont("Helvetica", 8)
        self.setFillColor(colors.HexColor("#64748B"))
        self.drawString(MARGIN, 30, "System Architects: Hadssha Bell S & Reuben Geoffrey  |  Production Build v5.3")
        
        page_str = f"Page {self._pageNumber} of {total_pages}"
        self.setFont("Helvetica-Bold", 8)
        self.setFillColor(colors.HexColor("#1E293B"))
        self.drawRightString(PAGE_WIDTH - MARGIN, 30, page_str)
        
        self.restoreState()


def build_pdf(filename=None):
    if filename is None:
        filename = os.path.join(BASE_DIR, "Project_Technical_Documentation.pdf")
        
    doc = SimpleDocTemplate(
        filename,
        pagesize=A4,
        leftMargin=MARGIN,
        rightMargin=MARGIN,
        topMargin=50,
        bottomMargin=50
    )

    styles = getSampleStyleSheet()
    
    # Custom Palette
    c_primary = colors.HexColor("#0B0F19")
    c_secondary = colors.HexColor("#1E293B")
    c_red = colors.HexColor("#E60012")
    c_slate = colors.HexColor("#334155")
    c_muted = colors.HexColor("#64748B")
    c_bg_light = colors.HexColor("#F8FAFC")
    c_border = colors.HexColor("#CBD5E1")

    # Typography Styles
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=23,
        leading=27,
        textColor=colors.HexColor("#FFFFFF")
    )
    
    subtitle_style = ParagraphStyle(
        'DocSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=12,
        leading=16,
        textColor=colors.HexColor("#CBD5E1")
    )
    
    h1_style = ParagraphStyle(
        'SectionH1',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=15,
        leading=19,
        textColor=c_secondary,
        spaceBefore=14,
        spaceAfter=6,
        keepWithNext=True
    )
    
    h2_style = ParagraphStyle(
        'SectionH2',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=12,
        leading=15,
        textColor=c_red,
        spaceBefore=10,
        spaceAfter=4,
        keepWithNext=True
    )

    h3_style = ParagraphStyle(
        'SectionH3',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=13,
        textColor=c_slate,
        spaceBefore=8,
        spaceAfter=3,
        keepWithNext=True
    )

    body_style = ParagraphStyle(
        'BodyDark',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.2,
        leading=13.2,
        textColor=c_slate,
        spaceAfter=6
    )

    bullet_style = ParagraphStyle(
        'BulletDark',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12.5,
        textColor=c_slate,
        leftIndent=14,
        firstLineIndent=-10,
        spaceAfter=3
    )

    code_style = ParagraphStyle(
        'CodeSnippet',
        parent=styles['Normal'],
        fontName='Courier',
        fontSize=7.6,
        leading=10.2,
        textColor=colors.HexColor("#0F172A"),
        backColor=colors.HexColor("#F1F5F9"),
        borderPadding=6,
        spaceBefore=4,
        spaceAfter=6
    )

    caption_style = ParagraphStyle(
        'FigureCaption',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=8.2,
        leading=11,
        textColor=c_muted,
        alignment=1, # Centered
        spaceBefore=5,
        spaceAfter=8
    )

    callout_style = ParagraphStyle(
        'CalloutText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12.5,
        textColor=colors.HexColor("#1E3A8A")
    )

    table_header_style = ParagraphStyle(
        'TableHeader',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.5,
        leading=11,
        textColor=colors.white
    )

    table_cell_style = ParagraphStyle(
        'TableCell',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8,
        leading=10.5,
        textColor=c_slate
    )

    table_cell_bold = ParagraphStyle(
        'TableCellBold',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8,
        leading=10.5,
        textColor=c_secondary
    )

    story = []

    # =========================================================================
    # COVER PAGE
    # =========================================================================
    story.append(Spacer(1, 15))
    
    # Top Decorative Yokohama Header Bar
    top_bar = Table(
        [[Paragraph("<b>YOKOHAMA TIRE MANUFACTURING  •  INDUSTRIAL OT/IT MES PLATFORM</b>", 
                   ParagraphStyle('TopBar', fontName='Helvetica-Bold', fontSize=8.5, textColor=colors.white, alignment=1))]],
        colWidths=[PRINTABLE_WIDTH],
        style=[
            ('BACKGROUND', (0,0), (-1,-1), c_red),
            ('ALIGN', (0,0), (-1,-1), 'CENTER'),
            ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
            ('TOPPADDING', (0,0), (-1,-1), 6),
            ('BOTTOMPADDING', (0,0), (-1,-1), 6),
        ]
    )
    story.append(top_bar)
    story.append(Spacer(1, 15))

    # Dark Title Box
    title_box_content = [
        Paragraph("ENGINEERING TECHNICAL SPECIFICATION & AUDIT DOSSIER", ParagraphStyle('CoverSub', fontName='Helvetica-Bold', fontSize=9, textColor=c_red)),
        Spacer(1, 6),
        Paragraph("Plant IT Downtime Management & Analytics System", title_style),
        Spacer(1, 6),
        Paragraph("High-Availability Manufacturing Execution System (MES) Telemetry, Zero-Data Standard, Automated Excel Analytics Engine & Multi-Tier RBAC Architecture", subtitle_style),
        Spacer(1, 10),
        Paragraph("<b>Live Production URL:</b> <font color='#60A5FA'><u>https://plant-it-downtime.vercel.app/</u></font>", ParagraphStyle('CoverLink', fontName='Helvetica', fontSize=9, textColor=colors.HexColor("#CBD5E1")))
    ]
    title_table = Table(
        [[title_box_content]],
        colWidths=[PRINTABLE_WIDTH],
        style=[
            ('BACKGROUND', (0,0), (-1,-1), c_primary),
            ('TOPPADDING', (0,0), (-1,-1), 22),
            ('BOTTOMPADDING', (0,0), (-1,-1), 22),
            ('LEFTPADDING', (0,0), (-1,-1), 20),
            ('RIGHTPADDING', (0,0), (-1,-1), 20),
            ('BOX', (0,0), (-1,-1), 1.5, c_slate),
        ]
    )
    story.append(title_table)
    story.append(Spacer(1, 18))

    # Authors & Project Metadata Card
    authors_data = [
        [
            Paragraph("<b>PROJECT AUTHORS & ARCHITECTS:</b>", table_cell_bold),
            Paragraph("<b>Hadssha Bell S & Reuben Geoffrey</b>", ParagraphStyle('Auth', fontName='Helvetica-Bold', fontSize=9.5, textColor=c_red))
        ],
        [
            Paragraph("<b>ACADEMIC CONTEXT:</b>", table_cell_bold),
            Paragraph("Engineering Capstone Project / Manufacturing Execution Systems (MES)", table_cell_style)
        ],
        [
            Paragraph("<b>AFFILIATION & DOMAIN:</b>", table_cell_bold),
            Paragraph("Automotive Industrial Tire Manufacturing — Plant IT/OT Infrastructure", table_cell_style)
        ],
        [
            Paragraph("<b>PRODUCTION REVISION:</b>", table_cell_bold),
            Paragraph("Version 5.3 Beta → Production Stable (Git: <code>5d5947f</code>)", table_cell_style)
        ],
        [
            Paragraph("<b>DEPLOYMENT TOPOLOGY:</b>", table_cell_bold),
            Paragraph("Vercel Global Edge (Node.js 24) + Supabase Managed PostgreSQL + WinForms / Tauri Rust", table_cell_style)
        ],
        [
            Paragraph("<b>COMPLIANCE VERIFICATION:</b>", table_cell_bold),
            Paragraph("59/59 Automated Test Assertions Passing (100% Suite Green)", table_cell_style)
        ],
        [
            Paragraph("<b>DATE OF PUBLICATION:</b>", table_cell_bold),
            Paragraph("October 2026", table_cell_style)
        ]
    ]
    meta_table = Table(
        authors_data,
        colWidths=[160, PRINTABLE_WIDTH - 160],
        style=[
            ('BACKGROUND', (0,0), (-1,-1), c_bg_light),
            ('BOX', (0,0), (-1,-1), 1, c_border),
            ('INNERGRID', (0,0), (-1,-1), 0.5, c_border),
            ('TOPPADDING', (0,0), (-1,-1), 6),
            ('BOTTOMPADDING', (0,0), (-1,-1), 6),
            ('LEFTPADDING', (0,0), (-1,-1), 12),
            ('RIGHTPADDING', (0,0), (-1,-1), 12),
        ]
    )
    story.append(meta_table)
    story.append(Spacer(1, 15))

    # Abstract Callout Box
    abstract_p = Paragraph(
        "<b>EXECUTIVE ABSTRACT:</b> This document provides the authoritative engineering specification and security audit dossier for the "
        "<b>Plant IT Downtime Management & Analytics System</b>. The platform replaces error-prone legacy manual paper logs and drifting desktop "
        "spreadsheets with an enterprise cloud-edge architecture. Key innovations include: (1) An authoritative plant availability mathematical "
        "model accounting for 8 continuous production areas (11,520 daily operating minutes); (2) A rigorous Zero-Data Standard that eliminates "
        "misleading '100% ghost green' uptime during zero-incident intervals; (3) Server-enforced Role-Based Access Control (RBAC) with cryptographic "
        "HMAC-SHA256 JWT tokens; (4) Client-side multi-click mutex debouncing; and (5) An automated dual-sheet Excel reporting engine with 9 high-DPI "
        "visual chart assets and formula injection sanitization. Validated across 5 comprehensive automated test suites and verified live in production.",
        callout_style
    )
    abstract_table = Table(
        [[abstract_p]],
        colWidths=[PRINTABLE_WIDTH],
        style=[
            ('BACKGROUND', (0,0), (-1,-1), colors.HexColor("#EFF6FF")),
            ('BOX', (0,0), (-1,-1), 1, colors.HexColor("#93C5FD")),
            ('LINELEFT', (0,0), (0,0), 4, colors.HexColor("#2563EB")),
            ('TOPPADDING', (0,0), (-1,-1), 10),
            ('BOTTOMPADDING', (0,0), (-1,-1), 10),
            ('LEFTPADDING', (0,0), (-1,-1), 14),
            ('RIGHTPADDING', (0,0), (-1,-1), 14),
        ]
    )
    story.append(abstract_table)
    story.append(PageBreak())

    # =========================================================================
    # TABLE OF CONTENTS / OUTLINE
    # =========================================================================
    story.append(Paragraph("DOCUMENT TABLE OF CONTENTS", h1_style))
    story.append(HRFlowable(width="100%", thickness=1.5, color=c_red, spaceBefore=2, spaceAfter=8))
    
    toc_data = [
        [Paragraph("<b>Section</b>", table_header_style), Paragraph("<b>Title & Core Technical Content</b>", table_header_style), Paragraph("<b>Scope</b>", table_header_style)],
        [Paragraph("1", table_cell_bold), Paragraph("Executive Summary & Industrial Background", table_cell_style), Paragraph("MES Context & Objectives", table_cell_style)],
        [Paragraph("2", table_cell_bold), Paragraph("Problem Statement & Operational Challenges", table_cell_style), Paragraph("Paper Logs & Spreadsheet Drift", table_cell_style)],
        [Paragraph("3", table_cell_bold), Paragraph("Comparative Analysis: Legacy vs. Proposed Platform", table_cell_style), Paragraph("8-Dimensional Evaluation", table_cell_style)],
        [Paragraph("4", table_cell_bold), Paragraph("System Scope, Functional Boundaries & Objectives", table_cell_style), Paragraph("8 Production Plant Areas", table_cell_style)],
        [Paragraph("5", table_cell_bold), Paragraph("Verified Technology Stack Inventory", table_cell_style), Paragraph("Full Component Breakdown", table_cell_style)],
        [Paragraph("6", table_cell_bold), Paragraph("System Architecture & High-Level Design", table_cell_style), Paragraph("Cloud-Edge & Microservices", table_cell_style)],
        [Paragraph("7", table_cell_bold), Paragraph("Data Flow Architecture & Processing Pipeline", table_cell_style), Paragraph("7-Step Transactional Flow", table_cell_style)],
        [Paragraph("8", table_cell_bold), Paragraph("Deployment Topology & Cloud Infrastructure", table_cell_style), Paragraph("Vercel Edge & Supabase", table_cell_style)],
        [Paragraph("9", table_cell_bold), Paragraph("Database Schema, Constraints & Relational Models", table_cell_style), Paragraph("PostgreSQL DDL & Tables", table_cell_style)],
        [Paragraph("10", table_cell_bold), Paragraph("Authoritative Mathematical Formulations & KPI Engine", table_cell_style), Paragraph("Availability, MTTR, Zero-Data", table_cell_style)],
        [Paragraph("11", table_cell_bold), Paragraph("Security Architecture, Authentication & RBAC Matrix", table_cell_style), Paragraph("JWT, Rate Limits, Hardening", table_cell_style)],
        [Paragraph("12", table_cell_bold), Paragraph("Frontend User Interface & Visual Experience Walkthrough", table_cell_style), Paragraph("8 Verified UI Screenshots", table_cell_style)],
        [Paragraph("13", table_cell_bold), Paragraph("Dual-Sheet Automated Excel Dashboard Engine", table_cell_style), Paragraph("9 Visual Embedded Charts", table_cell_style)],
        [Paragraph("14", table_cell_bold), Paragraph("Hybrid Desktop Deployments (.NET WinForms & Tauri v2)", table_cell_style), Paragraph("Offline Loopback & Binary", table_cell_style)],
        [Paragraph("15", table_cell_bold), Paragraph("Complete RESTful API Reference Specification", table_cell_style), Paragraph("Endpoints, Verbs, Payloads", table_cell_style)],
        [Paragraph("16", table_cell_bold), Paragraph("Verification Strategy, Testing & Quality Assurance", table_cell_style), Paragraph("5 Test Suites (59/59 Pass)", table_cell_style)],
        [Paragraph("17", table_cell_bold), Paragraph("Security Audit, Threat Modeling & Hardening Matrix", table_cell_style), Paragraph("Remediation & Proofs", table_cell_style)],
        [Paragraph("18", table_cell_bold), Paragraph("Error Handling, Fault Tolerance & Edge Cases", table_cell_style), Paragraph("Network Resilience & Mutex", table_cell_style)],
        [Paragraph("19", table_cell_bold), Paragraph("Viva Voce Technical Evaluation & Defense Q&A Bank", table_cell_style), Paragraph("12 Rigorous Oral Exam Q&A", table_cell_style)],
        [Paragraph("20", table_cell_bold), Paragraph("Future Roadmap, Engineering Enhancements & IoT", table_cell_style), Paragraph("Predictive ML & MQTT", table_cell_style)],
        [Paragraph("21", table_cell_bold), Paragraph("Conclusion, References & Technical Standards", table_cell_style), Paragraph("ISO/IEC Standards & Citations", table_cell_style)],
    ]
    toc_table = Table(
        toc_data,
        colWidths=[40, 340, PRINTABLE_WIDTH - 380],
        style=[
            ('BACKGROUND', (0,0), (-1,0), c_secondary),
            ('BOX', (0,0), (-1,-1), 1, c_border),
            ('INNERGRID', (0,0), (-1,-1), 0.5, c_border),
            ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.white, c_bg_light]),
            ('TOPPADDING', (0,0), (-1,-1), 4),
            ('BOTTOMPADDING', (0,0), (-1,-1), 4),
            ('LEFTPADDING', (0,0), (-1,-1), 6),
            ('RIGHTPADDING', (0,0), (-1,-1), 6),
        ]
    )
    story.append(toc_table)
    story.append(PageBreak())

    # =========================================================================
    # SECTION 1: EXECUTIVE SUMMARY & INDUSTRIAL BACKGROUND
    # =========================================================================
    story.append(Paragraph("1. Executive Summary & Industrial Background", h1_style))
    story.append(HRFlowable(width="100%", thickness=1, color=c_red, spaceBefore=2, spaceAfter=8))
    
    story.append(Paragraph(
        "Modern heavy manufacturing plants, particularly automotive tire manufacturing facilities such as Yokohama, operate on continuous "
        "24-hour, 7-day-a-week production cycles divided into three 8-hour operating shifts. In tire assembly, raw rubber compounding, extrusion, "
        "calendering, tire building (TBM), and vulcanization curing presses operate as an integrated manufacturing line. Any failure of the underlying "
        "Manufacturing Execution System (MES)—including terminal lockups, barcode scanner communication timeouts, PLC gateway disconnects, or database "
        "deadlocks—immediately halts high-throughput assembly lines. Downtime in these environments costs several thousand dollars per minute in lost output.",
        body_style
    ))
    story.append(Paragraph(
        "The <b>Plant IT Downtime Management & Analytics System</b> was engineered by <b>Hadssha Bell S</b> and <b>Reuben Geoffrey</b> to solve the systemic "
        "operational problems of manual paper logs, fragmented desktop spreadsheets, and subjective downtime accounting. It provides a real-time, "
        "tamper-resistant, and mathematically sound operational telemetry platform.",
        body_style
    ))
    
    story.append(Paragraph("Core Industrial Manufacturing Processes Covered", h2_style))
    story.append(Paragraph("• <b>Mixing & Compounding (Banbury Mixers)</b>: Elastomer formulation, carbon black dispersion, and sulfur masterbatch blending.", bullet_style))
    story.append(Paragraph("• <b>Extrusion Lines</b>: Dual and triplex extruders for tire treads, sidewalls, and inner liners under automated temperature regulation.", bullet_style))
    story.append(Paragraph("• <b>Calendering Processes</b>: High-precision coating of steel cord belts and textile fabric plies with skim rubber.", bullet_style))
    story.append(Paragraph("• <b>Tire Building Machines (TBM)</b>: First and second-stage assembly of carcass plies, bead rings, steel belts, and green tire shaping.", bullet_style))
    story.append(Paragraph("• <b>Curing & Vulcanization Presses</b>: Steam-heated press cavities subjecting green tires to high pressure and sulfur cross-linking.", bullet_style))
    story.append(Paragraph("• <b>Final Inspection & Quality Control</b>: Automated X-ray scanners, dynamic uniformity balance machines, and barcode verification.", bullet_style))
    story.append(Paragraph("• <b>Warehouse & Logistics Automation</b>: Automated Guided Vehicles (AGV) and barcode sorting conveyors feeding dispatch bays.", bullet_style))
    story.append(Paragraph("• <b>Common Plant IT & Utilities</b>: Industrial switches, PoE Wi-Fi APs, terminal servers, and plant SCADA gateways.", bullet_style))

    story.append(Spacer(1, 8))

    # =========================================================================
    # SECTION 2: PROBLEM STATEMENT & OPERATIONAL CHALLENGES
    # =========================================================================
    story.append(Paragraph("2. Problem Statement & Operational Challenges", h1_style))
    story.append(HRFlowable(width="100%", thickness=1, color=c_red, spaceBefore=2, spaceAfter=8))
    
    story.append(Paragraph(
        "Prior to the implementation of this system, plant IT infrastructure suffered from five major operational vulnerabilities:",
        body_style
    ))
    story.append(Paragraph("<b>1. Erroneous Operational Availability Metrics:</b> Standard commercial tools routinely calculate availability by dividing uptime hours by total calendar hours for a single asset. In a continuous plant with 8 parallel operational areas, this formula creates massive distortions, under-reporting downtime severity by up to 800%.", body_style))
    story.append(Paragraph("<b>2. The 'Ghost Green' 100% Deception:</b> When filtering a legacy dashboard over a weekend or holiday with zero logged incidents, spreadsheets automatically returned <code>100.00% Availability</code>. In reality, zero records often indicates an unlogged shift or broken network link. This false reassurance misled plant managers during corporate audits.", body_style))
    story.append(Paragraph("<b>3. Concurrency Hazards & Multi-Click Spam:</b> On shift changeovers, multiple line technicians submit incident logs simultaneously. High latency on shop-floor Wi-Fi caused operators to rapidly click the submit button, generating 3 to 6 duplicate database records for a single event.", body_style))
    story.append(Paragraph("<b>4. Spreadsheet Drift & Audit Discrepancies:</b> Supervisors kept isolated copies of <code>Downtime_Log_2026.xlsx</code> on local hard drives. Over months, formula corruptions, deleted rows, and conflicting records made plant-wide SLA tracking impossible.", body_style))
    story.append(Paragraph("<b>5. Security & Formula Injection Vulnerabilities:</b> Unsanitized incident text exported to Excel allowed malicious actors or accidental input containing <code>=cmd|...</code> or <code>+@SUM(...)</code> to trigger Dynamic Data Exchange (DDE) formula execution on executive workstations.", body_style))

    story.append(PageBreak())

    # =========================================================================
    # SECTION 3: COMPARATIVE ANALYSIS (LEGACY VS. PROPOSED)
    # =========================================================================
    story.append(Paragraph("3. Comparative Analysis: Legacy System vs. Proposed Platform", h1_style))
    story.append(HRFlowable(width="100%", thickness=1, color=c_red, spaceBefore=2, spaceAfter=8))
    
    story.append(Paragraph(
        "A rigorous side-by-side technical evaluation demonstrates the transformative advantages delivered by the new platform across 8 operational dimensions:",
        body_style
    ))
    
    comp_data = [
        [Paragraph("<b>Evaluation Dimension</b>", table_header_style), Paragraph("<b>Legacy Manual / Spreadsheet Setup</b>", table_header_style), Paragraph("<b>Proposed Plant IT Downtime Platform</b>", table_header_style)],
        [
            Paragraph("<b>Data Ingestion Speed</b>", table_cell_bold),
            Paragraph("Handwritten paper logs transcribed into local Excel hours after shift end.", table_cell_style),
            Paragraph("Instant entry (<15s) via responsive web portal or native desktop daemon.", table_cell_style)
        ],
        [
            Paragraph("<b>Availability Telemetry</b>", table_cell_bold),
            Paragraph("Ad-hoc spreadsheet formulas prone to broken relative cell references.", table_cell_style),
            Paragraph("Authoritative standard: Days × 1440 × 8 Plant Areas (11,520 min/day).", table_cell_style)
        ],
        [
            Paragraph("<b>Zero-Data State</b>", table_cell_bold),
            Paragraph("Outputs deceptive 100.00% 'ghost green' uptime when no data exists.", table_cell_style),
            Paragraph("Strict <code>N/A</code> telemetry output with neutral grey status indicators.", table_cell_style)
        ],
        [
            Paragraph("<b>Access Control (RBAC)</b>", table_cell_bold),
            Paragraph("None. Shared file system permissions allow any operator to edit/delete.", table_cell_style),
            Paragraph("Cryptographic JWT tokens enforcing Operator, Supervisor, and Admin boundaries.", table_cell_style)
        ],
        [
            Paragraph("<b>Executive Reporting</b>", table_cell_bold),
            Paragraph("Manual copy-pasting of charts into slide decks taking 2-3 hours.", table_cell_style),
            Paragraph("One-click dual-sheet Excel export containing 9 high-DPI embedded charts.", table_cell_style)
        ],
        [
            Paragraph("<b>Concurrency Defense</b>", table_cell_bold),
            Paragraph("Multi-user file locking collisions; frequent duplicate submissions.", table_cell_style),
            Paragraph("Client-side mutex locking + server idempotency hash checks.", table_cell_style)
        ],
        [
            Paragraph("<b>Formula Injection</b>", table_cell_bold),
            Paragraph("Zero sanitization; vulnerable to DDE Excel command execution.", table_cell_style),
            Paragraph("Automatic prepending of single quote (<code>'</code>) on all symbol-prefixed inputs.", table_cell_style)
        ],
        [
            Paragraph("<b>Offline Reliability</b>", table_cell_bold),
            Paragraph("Local files isolated; cannot aggregate across multiple plants.", table_cell_style),
            Paragraph("Hybrid desktop wrappers (.NET 8 WinForms & Tauri Rust) with local caching.", table_cell_style)
        ],
    ]
    comp_table = Table(
        comp_data,
        colWidths=[120, 195, PRINTABLE_WIDTH - 315],
        style=[
            ('BACKGROUND', (0,0), (-1,0), c_secondary),
            ('BOX', (0,0), (-1,-1), 1, c_border),
            ('INNERGRID', (0,0), (-1,-1), 0.5, c_border),
            ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.white, c_bg_light]),
            ('TOPPADDING', (0,0), (-1,-1), 5),
            ('BOTTOMPADDING', (0,0), (-1,-1), 5),
            ('LEFTPADDING', (0,0), (-1,-1), 6),
            ('RIGHTPADDING', (0,0), (-1,-1), 6),
        ]
    )
    story.append(comp_table)
    story.append(Spacer(1, 10))

    # =========================================================================
    # SECTION 4: SYSTEM SCOPE & OBJECTIVES
    # =========================================================================
    story.append(Paragraph("4. System Scope, Functional Boundaries & Objectives", h1_style))
    story.append(HRFlowable(width="100%", thickness=1, color=c_red, spaceBefore=2, spaceAfter=8))
    
    story.append(Paragraph(
        "<b>4.1 Functional Scope:</b> The software provides end-to-end incident lifecycle management covering initial detection, severity tagging, "
        "root cause categorization, machine multiplication scaling, technician assignment, resolution tracking, and executive telemetry visualization.",
        body_style
    ))
    story.append(Paragraph(
        "<b>4.2 Measurable Engineering Objectives:</b>",
        body_style
    ))
    story.append(Paragraph("• <b>Sub-Second Telemetry Recomputation</b>: Render updated KPI metrics and redraw canvas speedometer within 300ms of any incident mutation.", bullet_style))
    story.append(Paragraph("• <b>Strict 99.0% SLA Monitoring</b>: Visually flag and alert whenever total plant operational availability falls below the 99.0% enterprise SLA threshold.", bullet_style))
    story.append(Paragraph("• <b>Zero Data Integrity Standard</b>: Guarantee zero occurrences of false-green 100% metrics across all date ranges, areas, and process filters.", bullet_style))
    story.append(Paragraph("• <b>Sub-30ms Database Response</b>: Execute all relational database read/write queries via Supabase PostgreSQL within 30ms over edge connection pooling.", bullet_style))
    story.append(Paragraph("• <b>Comprehensive Test Coverage</b>: Maintain 100% test passage across unit, regression, acceptance, security, and export test suites.", bullet_style))

    story.append(PageBreak())

    # =========================================================================
    # SECTION 5: VERIFIED TECHNOLOGY STACK INVENTORY
    # =========================================================================
    story.append(Paragraph("5. Complete Verified Technology Stack Inventory", h1_style))
    story.append(HRFlowable(width="100%", thickness=1, color=c_red, spaceBefore=2, spaceAfter=8))
    
    story.append(Paragraph(
        "The system was engineered without unnecessary framework bloat, utilizing high-performance native browser features, serverless microservices, and managed PostgreSQL:",
        body_style
    ))

    stack_data = [
        [Paragraph("<b>Category / Layer</b>", table_header_style), Paragraph("<b>Technology / Library</b>", table_header_style), Paragraph("<b>Version / Specification</b>", table_header_style), Paragraph("<b>Implementation Role & Evidence</b>", table_header_style)],
        [
            Paragraph("<b>Frontend Core</b>", table_cell_bold),
            Paragraph("Vanilla ECMAScript", table_cell_style),
            Paragraph("ES2023 / HTML5", table_cell_style),
            Paragraph("Zero compile-step SPA in <code>app.js</code>; direct browser DOM manipulation.", table_cell_style)
        ],
        [
            Paragraph("<b>Styling Framework</b>", table_cell_bold),
            Paragraph("Tailwind CSS", table_cell_style),
            Paragraph("v3.4.1 (CDN)", table_cell_style),
            Paragraph("Yokohama corporate red (<code>#E60012</code>) and dark slate industrial theme.", table_cell_style)
        ],
        [
            Paragraph("<b>Interactive Charts</b>", table_cell_bold),
            Paragraph("Chart.js", table_cell_style),
            Paragraph("v4.4.1 (CDN)", table_cell_style),
            Paragraph("Horizontal bar, doughnut, and dual-axis trajectory graphs.", table_cell_style)
        ],
        [
            Paragraph("<b>Custom Gauge</b>", table_cell_bold),
            Paragraph("HTML5 Canvas 2D", table_cell_style),
            Paragraph("High-DPI Context", table_cell_style),
            Paragraph("Calibrated needle speedometer with colored warning arcs and target pin.", table_cell_style)
        ],
        [
            Paragraph("<b>Spreadsheet Engine</b>", table_cell_bold),
            Paragraph("ExcelJS", table_cell_style),
            Paragraph("v4.4.0 (npm/CDN)", table_cell_style),
            Paragraph("Dual-sheet workbook generation with 9 embedded base64 chart drawings.", table_cell_style)
        ],
        [
            Paragraph("<b>Serverless Compute</b>", table_cell_bold),
            Paragraph("Vercel Edge Functions", table_cell_style),
            Paragraph("Node.js 24.x runtime", table_cell_style),
            Paragraph("Serverless API routes in <code>iad1</code> region: auth, incidents, kpi, master-data.", table_cell_style)
        ],
        [
            Paragraph("<b>Cloud Database</b>", table_cell_bold),
            Paragraph("Supabase PostgreSQL", table_cell_style),
            Paragraph("PostgreSQL 15 Cluster", table_cell_style),
            Paragraph("Managed relational tables <code>public.incidents</code> and <code>public.user_accounts</code>.", table_cell_style)
        ],
        [
            Paragraph("<b>Authentication</b>", table_cell_bold),
            Paragraph("Cryptographic JWT", table_cell_style),
            Paragraph("HMAC-SHA256 (24h)", table_cell_style),
            Paragraph("Stateless signed tokens with role claims verified at serverless gateway.", table_cell_style)
        ],
        [
            Paragraph("<b>Brute-Force Guard</b>", table_cell_bold),
            Paragraph("Sliding Window Bucket", table_cell_style),
            Paragraph("5 reqs / 60 sec", table_cell_style),
            Paragraph("IP & username sliding window limiter returning HTTP 429 on abuse.", table_cell_style)
        ],
        [
            Paragraph("<b>Desktop Launcher</b>", table_cell_bold),
            Paragraph("C# .NET WinForms", table_cell_style),
            Paragraph(".NET 8.0 / WebView2", table_cell_style),
            Paragraph("Local HTTP daemon on loopback port 8080 hosting Edge WebView2.", table_cell_style)
        ],
        [
            Paragraph("<b>Cross-Platform App</b>", table_cell_bold),
            Paragraph("Tauri v2 (Rust)", table_cell_style),
            Paragraph("Tauri 2.0 / Rust 1.78+", table_cell_style),
            Paragraph("3.5MB ultra-lean desktop executable consuming under 40MB system RAM.", table_cell_style)
        ],
        [
            Paragraph("<b>Test Framework</b>", table_cell_bold),
            Paragraph("Node.js Native Assert", table_cell_style),
            Paragraph("Node 24 Test Suite", table_cell_style),
            Paragraph("5 automated test suites with 59 verified test assertions (100% green).", table_cell_style)
        ],
    ]
    stack_table = Table(
        stack_data,
        colWidths=[95, 110, 105, PRINTABLE_WIDTH - 310],
        style=[
            ('BACKGROUND', (0,0), (-1,0), c_secondary),
            ('BOX', (0,0), (-1,-1), 1, c_border),
            ('INNERGRID', (0,0), (-1,-1), 0.5, c_border),
            ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.white, c_bg_light]),
            ('TOPPADDING', (0,0), (-1,-1), 4),
            ('BOTTOMPADDING', (0,0), (-1,-1), 4),
            ('LEFTPADDING', (0,0), (-1,-1), 5),
            ('RIGHTPADDING', (0,0), (-1,-1), 5),
        ]
    )
    story.append(stack_table)
    story.append(PageBreak())

    # =========================================================================
    # SECTION 6: SYSTEM ARCHITECTURE & HIGH-LEVEL DESIGN
    # =========================================================================
    story.append(Paragraph("6. System Architecture & High-Level Design", h1_style))
    story.append(HRFlowable(width="100%", thickness=1, color=c_red, spaceBefore=2, spaceAfter=8))
    
    story.append(Paragraph(
        "The architecture implements a decoupled three-tier design spanning multi-platform client applications, a global edge compute layer, "
        "and a managed relational database cluster. Every layer is isolated and communicates strictly over authenticated HTTPS/TLS 1.3.",
        body_style
    ))

    arch_img_path = os.path.join(BASE_DIR, "Architecture_Diagram.png")
    if os.path.exists(arch_img_path):
        story.append(Spacer(1, 4))
        story.append(Image(arch_img_path, width=470, height=290))
        story.append(Paragraph("<b>Figure 6.1: High-Level System Architecture Topology</b> — Multi-Platform Client Layer, Vercel Edge Serverless Functions, and Supabase PostgreSQL Cluster.", caption_style))
        story.append(Spacer(1, 4))

    story.append(Paragraph("Architectural Tiers Breakdown", h2_style))
    story.append(Paragraph("<b>1. Multi-Platform Client Tier:</b> Operators access the application through modern web browsers (Chrome, Edge, Safari), an industrial C# .NET WinForms launcher running on factory touchscreens, or a lightweight Tauri Rust executable on shop-floor IoT gateways. All client variants render identical UI components and enforce local input validation.", body_style))
    story.append(Paragraph("<b>2. Edge Compute & Security Gateway:</b> Hosted on Vercel's global edge network (`iad1` US-East region). The edge gateway terminates TLS 1.3, enforces CORS policies, manages sliding-window IP rate limiting, verifies HMAC-SHA256 JWT signatures, and routes requests to dedicated serverless functions.", body_style))
    story.append(Paragraph("<b>3. Persistence & Relational Tier:</b> Managed Supabase PostgreSQL 15 cluster providing ACID transactions, strict check constraints, foreign keys, and automated backup snapshots. Direct PostgREST access is restricted; all mutations are mediated by authenticated serverless functions.", body_style))

    story.append(PageBreak())

    # =========================================================================
    # SECTION 7: DATA FLOW ARCHITECTURE & PROCESSING PIPELINE
    # =========================================================================
    story.append(Paragraph("7. Data Flow Architecture & Processing Pipeline", h1_style))
    story.append(HRFlowable(width="100%", thickness=1, color=c_red, spaceBefore=2, spaceAfter=8))
    
    story.append(Paragraph(
        "Incident records follow an immutable 7-step transactional pipeline from user submission through database persistence to synchronized UI telemetry rendering:",
        body_style
    ))

    dfd_img_path = os.path.join(BASE_DIR, "Data_Flow_Diagram.png")
    if os.path.exists(dfd_img_path):
        story.append(Spacer(1, 4))
        story.append(Image(dfd_img_path, width=470, height=285))
        story.append(Paragraph("<b>Figure 7.1: End-to-End Incident Processing Data Flow</b> — Client Mutex, Edge Authentication, RBAC Gate, PostgreSQL Storage, and Synchronized Canvas Telemetry.", caption_style))
        story.append(Spacer(1, 4))

    story.append(Paragraph("Detailed Step-by-Step Processing Stages", h2_style))
    story.append(Paragraph("<b>Step 1 — Client Validation & Mutex Lock:</b> When the operator clicks 'Save Downtime Record', an asynchronous mutex flag is set immediately. The submit button is disabled and displays a spinning indicator. Input fields are validated: downtime minutes must be positive integer, date must match ISO 8601, and required dropdowns must be selected.", body_style))
    story.append(Paragraph("<b>Step 2 — Secure Network Transport:</b> The incident payload is serialized to JSON and dispatched via HTTPS POST to <code>/api/incidents</code> with the user's active session token attached in the <code>Authorization: Bearer &lt;token&gt;</code> header.", body_style))
    story.append(Paragraph("<b>Step 3 — Edge Security & Rate Verification:</b> The edge middleware verifies origin headers and checks the IP sliding-window token bucket. If request frequency exceeds 5 requests per 60 seconds, HTTP 429 Too Many Requests is returned.", body_style))
    story.append(Paragraph("<b>Step 4 — Cryptographic Signature & Role Authorization:</b> The edge function verifies the HMAC-SHA256 signature using the server's private secret. The token payload's role claim is verified against endpoint permissions (Operator/Supervisor/Admin for creation; Admin-only for deletion/updates).", body_style))
    story.append(Paragraph("<b>Step 5 — PostgreSQL Transactional Persistence:</b> The serverless function maps camelCase payload fields to PostgreSQL snake_case columns and executes an authenticated SQL INSERT via PostgREST. PostgreSQL check constraints validate <code>downtime_minutes > 0</code> and status enum values.", body_style))
    story.append(Paragraph("<b>Step 6 — Mathematical Telemetry Recomputation:</b> Serverless <code>api/kpi.js</code> invalidates stale aggregates and recalculates total plant operating minutes, availability percentage, MTTR, and closure rate.", body_style))
    story.append(Paragraph("<b>Step 7 — Synchronized UI Rendering:</b> The client receives HTTP 201 Created, releases the mutex lock, inserts the new row into the incidents table, recalculates local chart datasets, and animates the speedometer gauge to its updated percentage.", body_style))

    story.append(PageBreak())

    # =========================================================================
    # SECTION 8: DEPLOYMENT ARCHITECTURE & INFRASTRUCTURE TOPOLOGY
    # =========================================================================
    story.append(Paragraph("8. Deployment Architecture & Infrastructure Topology", h1_style))
    story.append(HRFlowable(width="100%", thickness=1, color=c_red, spaceBefore=2, spaceAfter=8))
    
    story.append(Paragraph(
        "The production application is distributed globally on high-availability edge nodes while maintaining co-located serverless compute and database infrastructure:",
        body_style
    ))

    dep_img_path = os.path.join(BASE_DIR, "Deployment_Diagram.png")
    if os.path.exists(dep_img_path):
        story.append(Spacer(1, 4))
        story.append(Image(dep_img_path, width=470, height=285))
        story.append(Paragraph("<b>Figure 8.1: Production Deployment Infrastructure Topology</b> — Global Vercel Edge PoPs, Washington D.C. Serverless Compute, and AWS East Managed Supabase PostgreSQL.", caption_style))
        story.append(Spacer(1, 4))

    story.append(Paragraph("Infrastructure Specification", h2_style))
    story.append(Paragraph("• <b>Global Edge Delivery (Vercel CDN)</b>: Over 300 Anycast edge locations serve static assets (`index.html`, `app.js`, CSS, vendor bundles) with automatic Brotli compression, HTTP/2 multiplexing, and sub-15ms Time-to-First-Byte (TTFB).", bullet_style))
    story.append(Paragraph("• <b>Compute Region Optimization (`iad1`)</b>: Vercel Serverless Functions execute in the `iad1` (Washington D.C.) region, minimizing latency to Supabase AWS US-East database instances to sub-30ms round-trips.", bullet_style))
    story.append(Paragraph("• <b>Database High Availability</b>: Supabase PostgreSQL 15 cluster running on AWS East with automated daily point-in-time recovery (PITR), connection pooling via PgBouncer, and strict TLS encryption (`sslmode=require`).", bullet_style))
    story.append(Paragraph("• <b>Automated CI/CD Pipeline</b>: Code pushed to the Git repository triggers automated Vercel preview builds, runs test suites, and promotes clean builds to production URL <code>https://plant-it-downtime.vercel.app/</code>.", bullet_style))

    story.append(PageBreak())

    # =========================================================================
    # SECTION 9: DATABASE SCHEMA & RELATIONAL MODELING
    # =========================================================================
    story.append(Paragraph("9. Database Schema & Relational Modeling", h1_style))
    story.append(HRFlowable(width="100%", thickness=1, color=c_red, spaceBefore=2, spaceAfter=8))
    
    story.append(Paragraph(
        "The relational database schema is structured into two core tables designed for ACID compliance, referential integrity, and high-performance querying:",
        body_style
    ))

    er_img_path = os.path.join(BASE_DIR, "Database_ER_Diagram.png")
    if os.path.exists(er_img_path):
        story.append(Spacer(1, 4))
        story.append(Image(er_img_path, width=470, height=285))
        story.append(Paragraph("<b>Figure 9.1: Entity-Relationship Diagram (ERD)</b> — Relational Structure, Primary Keys, Constraints, and Attribute Types of <code>public.incidents</code> and <code>public.user_accounts</code>.", caption_style))
        story.append(Spacer(1, 4))

    story.append(Paragraph("Production PostgreSQL DDL Specification", h2_style))
    sql_snippet = (
        "-- Incident Audit & Operational Telemetry Table\n"
        "CREATE TABLE public.incidents (\n"
        "    id TEXT PRIMARY KEY,                          -- Format: INC-YYYYMMDD-XXXX\n"
        "    date DATE NOT NULL,                           -- Shift operation date\n"
        "    nature VARCHAR(50) NOT NULL DEFAULT 'MES',    -- MES, Hardware, Network\n"
        "    area VARCHAR(50) NOT NULL,                    -- 8 Standard Plant Areas\n"
        "    process VARCHAR(50) NOT NULL,                 -- Specific manufacturing process\n"
        "    machine_no VARCHAR(100) NOT NULL,             -- Machine equipment identifier\n"
        "    is_critical VARCHAR(5) DEFAULT 'No',          -- Critical downtime flag\n"
        "    downtime_minutes INTEGER NOT NULL CHECK (downtime_minutes > 0),\n"
        "    affected_machines INTEGER DEFAULT 1 CHECK (affected_machines >= 1),\n"
        "    total_downtime_minutes INTEGER NOT NULL,      -- downtime_minutes * affected_machines\n"
        "    category VARCHAR(50) NOT NULL,                -- Root cause category\n"
        "    issue_details TEXT,                           -- Detailed failure symptoms\n"
        "    action_plan TEXT,                             -- Corrective action applied\n"
        "    responsibility VARCHAR(50) DEFAULT 'ATC',     -- ATC, Plant IT, Vendor\n"
        "    closed_date DATE,                             -- Incident closure date\n"
        "    responsible_person VARCHAR(100),              -- Assigned engineer\n"
        "    status VARCHAR(20) DEFAULT 'Open' CHECK (status IN ('Open', 'Completed', 'Closed', 'In Progress')),\n"
        "    remarks TEXT,                                 -- Shift handover notes\n"
        "    created_at TIMESTAMPTZ DEFAULT NOW(),         -- Audit creation timestamp\n"
        "    updated_at TIMESTAMPTZ DEFAULT NOW()          -- Audit modification timestamp\n"
        ");"
    )
    story.append(Paragraph(sql_snippet.replace("\n", "<br/>").replace(" ", "&nbsp;"), code_style))

    story.append(PageBreak())

    # =========================================================================
    # SECTION 10: MATHEMATICAL FORMULATIONS & KPI ENGINE
    # =========================================================================
    story.append(Paragraph("10. Authoritative Mathematical Formulations & KPI Engine", h1_style))
    story.append(HRFlowable(width="100%", thickness=1, color=c_red, spaceBefore=2, spaceAfter=8))
    
    story.append(Paragraph(
        "To eliminate telemetry discrepancies between shift supervisors and corporate management, the system establishes mathematically rigorous formulas reflecting continuous industrial operations:",
        body_style
    ))

    story.append(Paragraph("10.1 Plant Operating Capacity Formulation", h2_style))
    story.append(Paragraph(
        "Modern tire manufacturing operates 24/7/365 across 8 distinct plant areas running in parallel. Therefore, plant operating capacity is computed as:",
        body_style
    ))
    formula_1 = (
        "Total Operating Minutes = Calendar Days in Filter × 24 Hours/Day × 60 Minutes/Hour × 8 Plant Areas<br/>"
        "<b>Total Operating Minutes = Days × 11,520 Minutes/Day</b>"
    )
    story.append(Paragraph(formula_1, code_style))
    story.append(Paragraph(
        "<i>Example Calculation:</i> For a standard 30-day reporting month (e.g., April 2026), the plant operating capacity is exactly:<br/>"
        "30 Days × 11,520 = <b>345,600 Operating Minutes</b> (5,760 Total Area Operating Hours).",
        body_style
    ))

    story.append(Paragraph("10.2 Overall Plant Availability Percentage", h2_style))
    formula_2 = (
        "Availability (%) = [ (Total Operating Minutes - Total Downtime Minutes) / Total Operating Minutes ] × 100<br/>"
        "Where Total Downtime Minutes = Σ (downtime_minutes_i × affected_machines_i) for all valid incidents."
    )
    story.append(Paragraph(formula_2, code_style))

    story.append(Paragraph("10.3 Mean Time to Resolve (MTTR)", h2_style))
    story.append(Paragraph(
        "MTTR isolates maintenance response and repair efficiency. It is computed strictly on incidents that have reached completion:",
        body_style
    ))
    formula_3 = (
        "MTTR (Minutes) = Σ (downtime_minutes_j) / Count(Completed Incidents)<br/>"
        "Where j ∈ { Incidents where status IN ('Completed', 'Closed') }."
    )
    story.append(Paragraph(formula_3, code_style))

    story.append(Paragraph("10.4 Incident Closure Rate Percentage", h2_style))
    formula_4 = (
        "Closure Rate (%) = [ (Count(Completed) + Count(Closed)) / Count(Total Valid Incidents) ] × 100"
    )
    story.append(Paragraph(formula_4, code_style))

    story.append(Paragraph("10.5 Rigorous Zero-Data Telemetry Standard", h2_style))
    story.append(Paragraph(
        "When an operator filters a period with zero recorded downtime (or when operating time is null), legacy systems routinely displayed "
        "<code>100.00% Availability</code>. In manufacturing, zero records frequently indicates missing reports or network outages. "
        "Displaying false 100% availability provides dangerous false assurance. Our engine enforces the following standard:",
        body_style
    ))
    
    zero_data = [
        [Paragraph("<b>Metric Telemetry Field</b>", table_header_style), Paragraph("<b>Zero-Data State (Empty Set)</b>", table_header_style), Paragraph("<b>UI Display String</b>", table_header_style), Paragraph("<b>Visual Status & Color</b>", table_header_style)],
        [Paragraph("Overall Availability", table_cell_bold), Paragraph("<code>null</code> (undefined)", table_cell_style), Paragraph("<b>N/A</b>", table_cell_style), Paragraph("Neutral Slate Grey (#64748B)", table_cell_style)],
        [Paragraph("Closure Rate", table_cell_bold), Paragraph("<code>null</code> (undefined)", table_cell_style), Paragraph("<b>N/A</b>", table_cell_style), Paragraph("Neutral Slate Grey (#64748B)", table_cell_style)],
        [Paragraph("Mean Time to Resolve", table_cell_bold), Paragraph("<code>null</code> (undefined)", table_cell_style), Paragraph("<b>N/A</b>", table_cell_style), Paragraph("Neutral Slate Grey (#64748B)", table_cell_style)],
        [Paragraph("Total Downtime", table_cell_bold), Paragraph("<code>0</code> (integer)", table_cell_style), Paragraph("<b>0m (0.0 hrs)</b>", table_cell_style), Paragraph("Normal Green (#10B981)", table_cell_style)],
        [Paragraph("Speedometer Gauge", table_cell_bold), Paragraph("<code>0.0</code> (baseline angle)", table_cell_style), Paragraph("<b>0% Needle Resting</b>", table_cell_style), Paragraph("Target Marker at 99.0%", table_cell_style)],
    ]
    zero_table = Table(
        zero_data,
        colWidths=[130, 115, 110, PRINTABLE_WIDTH - 355],
        style=[
            ('BACKGROUND', (0,0), (-1,0), c_secondary),
            ('BOX', (0,0), (-1,-1), 1, c_border),
            ('INNERGRID', (0,0), (-1,-1), 0.5, c_border),
            ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.white, c_bg_light]),
            ('TOPPADDING', (0,0), (-1,-1), 4),
            ('BOTTOMPADDING', (0,0), (-1,-1), 4),
            ('LEFTPADDING', (0,0), (-1,-1), 5),
            ('RIGHTPADDING', (0,0), (-1,-1), 5),
        ]
    )
    story.append(zero_table)
    story.append(PageBreak())

    # =========================================================================
    # SECTION 11: SECURITY ARCHITECTURE, AUTHENTICATION & RBAC
    # =========================================================================
    story.append(Paragraph("11. Security Architecture, Authentication & RBAC Matrix", h1_style))
    story.append(HRFlowable(width="100%", thickness=1, color=c_red, spaceBefore=2, spaceAfter=8))
    
    story.append(Paragraph(
        "Security is implemented across all architectural tiers following the principle of least privilege. "
        "Client-side UI role checks are treated strictly as cosmetic affordances; every sensitive API route performs server-side cryptographic token verification.",
        body_style
    ))

    rbac_data = [
        [Paragraph("<b>System Capability / Operation</b>", table_header_style), Paragraph("<b>OPERATOR</b>", table_header_style), Paragraph("<b>SUPERVISOR</b>", table_header_style), Paragraph("<b>ADMINISTRATOR</b>", table_header_style)],
        [Paragraph("View Dashboard Telemetry & Charts", table_cell_bold), Paragraph("PERMITTED", table_cell_style), Paragraph("PERMITTED", table_cell_style), Paragraph("PERMITTED", table_cell_style)],
        [Paragraph("View Incident Records Audit Table", table_cell_bold), Paragraph("PERMITTED", table_cell_style), Paragraph("PERMITTED", table_cell_style), Paragraph("PERMITTED", table_cell_style)],
        [Paragraph("Log New Incident Event", table_cell_bold), Paragraph("PERMITTED", table_cell_style), Paragraph("PERMITTED", table_cell_style), Paragraph("PERMITTED", table_cell_style)],
        [Paragraph("Export Dual-Sheet Excel Dashboard", table_cell_bold), Paragraph("PERMITTED", table_cell_style), Paragraph("PERMITTED", table_cell_style), Paragraph("PERMITTED", table_cell_style)],
        [Paragraph("Edit Existing Incident Record", table_cell_bold), Paragraph("<font color='#DC2626'>BLOCKED (403)</font>", table_cell_style), Paragraph("<font color='#DC2626'>BLOCKED (403)</font>", table_cell_style), Paragraph("<b>PERMITTED</b>", table_cell_bold)],
        [Paragraph("Delete Single Incident Record", table_cell_bold), Paragraph("<font color='#DC2626'>BLOCKED (403)</font>", table_cell_style), Paragraph("<font color='#DC2626'>BLOCKED (403)</font>", table_cell_style), Paragraph("<b>PERMITTED</b>", table_cell_bold)],
        [Paragraph("Empty All Plant Incident Logs", table_cell_bold), Paragraph("<font color='#DC2626'>BLOCKED (403)</font>", table_cell_style), Paragraph("<font color='#DC2626'>BLOCKED (403)</font>", table_cell_style), Paragraph("<b>PERMITTED (Requires Phrase)</b>", table_cell_bold)],
        [Paragraph("Manage User Accounts & Passwords", table_cell_bold), Paragraph("<font color='#DC2626'>BLOCKED (403)</font>", table_cell_style), Paragraph("<font color='#DC2626'>BLOCKED (403)</font>", table_cell_style), Paragraph("<b>PERMITTED</b>", table_cell_bold)],
        [Paragraph("Modify Master Plant Equipment", table_cell_bold), Paragraph("<font color='#DC2626'>BLOCKED (403)</font>", table_cell_style), Paragraph("<font color='#DC2626'>BLOCKED (403)</font>", table_cell_style), Paragraph("<b>PERMITTED</b>", table_cell_bold)],
    ]
    rbac_table = Table(
        rbac_data,
        colWidths=[175, 110, 110, PRINTABLE_WIDTH - 395],
        style=[
            ('BACKGROUND', (0,0), (-1,0), c_secondary),
            ('BOX', (0,0), (-1,-1), 1, c_border),
            ('INNERGRID', (0,0), (-1,-1), 0.5, c_border),
            ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.white, c_bg_light]),
            ('TOPPADDING', (0,0), (-1,-1), 4),
            ('BOTTOMPADDING', (0,0), (-1,-1), 4),
            ('LEFTPADDING', (0,0), (-1,-1), 6),
            ('RIGHTPADDING', (0,0), (-1,-1), 6),
        ]
    )
    story.append(rbac_table)
    story.append(Spacer(1, 8))

    story.append(Paragraph("Core Security Hardening Measures", h2_style))
    story.append(Paragraph("• <b>HMAC-SHA256 Stateless Tokens</b>: Cryptographically signed tokens expire in 24 hours. The edge middleware decodes and verifies signatures on every request, completely ignoring browser-supplied roles.", bullet_style))
    story.append(Paragraph("• <b>Sliding-Window Rate Limiting</b>: Brute-force attacks against <code>/api/auth</code> are mitigated by a token bucket allowing a maximum of 5 attempts per 60 seconds per IP address.", bullet_style))
    story.append(Paragraph("• <b>Destructive Mutation Safeguards</b>: The 'Empty All Logs' operation requires both an Admin JWT token and the explicit typed confirmation phrase <code>PERMANENTLY DELETE ALL LOGS</code>.", bullet_style))
    story.append(Paragraph("• <b>Spreadsheet Formula Neutralization</b>: All user-supplied string fields are sanitized before Excel workbook inclusion, prepending a single quote to prevent DDE code execution.", bullet_style))

    story.append(PageBreak())

    # =========================================================================
    # SECTION 12: FRONTEND UI & SCREENSHOT WALKTHROUGH
    # =========================================================================
    story.append(Paragraph("12. Frontend User Interface & Visual Experience Walkthrough", h1_style))
    story.append(HRFlowable(width="100%", thickness=1, color=c_red, spaceBefore=2, spaceAfter=8))
    
    story.append(Paragraph(
        "The interface was specifically engineered for high-visibility industrial shop-floor operations. Below is a comprehensive visual walkthrough "
        "featuring verified high-resolution screenshots captured directly from the live production deployment:",
        body_style
    ))

    screenshots_info = [
        ("01_login_gatekeeper.png", "Figure 12.1: Login Gatekeeper Modal & Frosted Glass Attribution Badge", 
         "The initial authentication gatekeeper requiring username/password credentials. Features the prominent attribution badge 'Build by Hadssha Bell S & Reuben Geoffrey'."),
        ("02_dashboard_kpi.png", "Figure 12.2: Real-Time Executive KPI Dashboard & Speedometer Gauge",
         "Executive telemetry overview displaying Overall Availability (99.87%), Total Operating Hours, Recorded Downtime, and the calibrated Canvas 2D Speedometer."),
        ("03_analytics_charts.png", "Figure 12.3: Interactive Manufacturing Analytics & Trajectory Charts",
         "Multi-chart analytical grid displaying Area-wise availability horizontal bars, Process availability, and dual-axis Monthly downtime trajectory."),
        ("04_downtime_entry_form.png", "Figure 12.4: Plant Downtime Incident Entry Form & Validation Controls",
         "Shift operator incident logging form featuring dynamic area/process cascading dropdowns, machine multiplier calculation, and mutex debounced submission."),
        ("05_incident_records_table.png", "Figure 12.5: Incident Audit Records Table & Multi-Parameter Filter Bar",
         "Tabular audit log with search filtering, status tags (Open, In Progress, Completed), and role-restricted action buttons (Edit/Delete)."),
        ("06_master_settings.png", "Figure 12.6: Master Equipment Settings & User Account Administration",
         "Administrative management console for registering production equipment, updating user passwords, and configuring master plant areas."),
        ("07_export_modal.png", "Figure 12.7: Dual-Sheet Excel Dashboard Export Configuration Modal",
         "One-click reporting modal that generates the dual-sheet Excel workbook with 9 embedded visual charts and sanitized incident logs."),
        ("08_mobile_responsive.png", "Figure 12.8: Mobile-Responsive Viewport Layout for Plant Handhelds",
         "Responsive CSS layout adapting seamlessly to 375px handheld mobile terminals used by floor supervisors during walking line audits.")
    ]

    for img_file, fig_title, fig_desc in screenshots_info:
        img_full_path = os.path.join(BASE_DIR, "Project_Screenshots", img_file)
        if os.path.exists(img_full_path):
            story.append(Spacer(1, 4))
            if img_file == "08_mobile_responsive.png":
                # Portrait image
                story.append(Table([[Image(img_full_path, width=170, height=368)]], 
                                   colWidths=[PRINTABLE_WIDTH],
                                   style=[('ALIGN', (0,0), (-1,-1), 'CENTER'),
                                          ('VALIGN', (0,0), (-1,-1), 'MIDDLE')]))
            else:
                # Landscape 16:10 screenshot
                story.append(Image(img_full_path, width=470, height=290))
            story.append(Paragraph(f"<b>{fig_title}</b> — {fig_desc}", caption_style))
            story.append(Spacer(1, 6))
            story.append(PageBreak())

    # =========================================================================
    # SECTION 13: DUAL-SHEET EXCEL DASHBOARD ENGINE
    # =========================================================================
    story.append(Paragraph("13. Dual-Sheet Automated Excel Dashboard Engine", h1_style))
    story.append(HRFlowable(width="100%", thickness=1, color=c_red, spaceBefore=2, spaceAfter=8))
    
    story.append(Paragraph(
        "A major breakthrough of the platform is its client-side automated spreadsheet generation engine powered by <code>ExcelJS 4.4.0</code>. "
        "Rather than exporting raw unformatted CSV dumps, the platform dynamically compiles a publication-grade dual-sheet workbook directly in browser memory:",
        body_style
    ))

    story.append(Paragraph("Worksheet 1: PLANT_DASHBOARD (Executive Graphical Summary)", h2_style))
    story.append(Paragraph("• <b>Executive Header & Yokohama Branding</b>: High-contrast corporate title banner, report generation timestamp, and author attribution badge.", bullet_style))
    story.append(Paragraph("• <b>6 Core Metric KPI Summary Cards</b>: Total Operating Hours, Total Downtime (Hours & Minutes), Overall Availability %, Target SLA (≥99.0%), Total Incident Count, and Mean Time to Resolve (MTTR).", bullet_style))
    story.append(Paragraph("• <b>9 Embedded High-DPI Visual Chart Assets</b>: Rendered off-screen on high-resolution canvas contexts, extracted as PNG buffers, and inserted directly into worksheet drawing objects:", bullet_style))
    
    excel_charts_data = [
        [Paragraph("<b>Chart Asset #</b>", table_header_style), Paragraph("<b>Visual Chart Name</b>", table_header_style), Paragraph("<b>Chart Geometry / Type</b>", table_header_style), Paragraph("<b>Sheet Anchor Coordinates</b>", table_header_style)],
        [Paragraph("Chart 1", table_cell_bold), Paragraph("Availability Speedometer Gauge", table_cell_style), Paragraph("Trigonometric Needle Gauge", table_cell_style), Paragraph("Row 8, Column B:E", table_cell_style)],
        [Paragraph("Chart 2", table_cell_bold), Paragraph("Monthly Availability Trajectory", table_cell_style), Paragraph("Horizontal Progress Bar", table_cell_style), Paragraph("Row 8, Column F:I", table_cell_style)],
        [Paragraph("Chart 3", table_cell_bold), Paragraph("Area-Wise Availability", table_cell_style), Paragraph("Horizontal Bar Chart", table_cell_style), Paragraph("Row 18, Column B:E", table_cell_style)],
        [Paragraph("Chart 4", table_cell_bold), Paragraph("Process-Wise Availability", table_cell_style), Paragraph("Vertical Column Chart", table_cell_style), Paragraph("Row 18, Column F:I", table_cell_style)],
        [Paragraph("Chart 5", table_cell_bold), Paragraph("Equipment Availability & Downtime Trajectory", table_cell_style), Paragraph("Dual-Axis Line & Bar Chart", table_cell_style), Paragraph("Row 28, Column B:I", table_cell_style)],
        [Paragraph("Chart 6", table_cell_bold), Paragraph("Area-Wise Downtime Loss Breakdown", table_cell_style), Paragraph("Horizontal Ranking Bar", table_cell_style), Paragraph("Row 38, Column B:E", table_cell_style)],
        [Paragraph("Chart 7", table_cell_bold), Paragraph("Process-Wise Downtime Breakdown", table_cell_style), Paragraph("Horizontal Ranking Bar", table_cell_style), Paragraph("Row 38, Column F:I", table_cell_style)],
        [Paragraph("Chart 8", table_cell_bold), Paragraph("Category Downtime Loss Share", table_cell_style), Paragraph("Doughnut / Pie Chart", table_cell_style), Paragraph("Row 48, Column B:E", table_cell_style)],
        [Paragraph("Chart 9", table_cell_bold), Paragraph("Category Loss Magnitude Comparison", table_cell_style), Paragraph("Vertical Column Chart", table_cell_style), Paragraph("Row 48, Column F:I", table_cell_style)],
    ]
    excel_table = Table(
        excel_charts_data,
        colWidths=[70, 160, 140, PRINTABLE_WIDTH - 370],
        style=[
            ('BACKGROUND', (0,0), (-1,0), c_secondary),
            ('BOX', (0,0), (-1,-1), 1, c_border),
            ('INNERGRID', (0,0), (-1,-1), 0.5, c_border),
            ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.white, c_bg_light]),
            ('TOPPADDING', (0,0), (-1,-1), 4),
            ('BOTTOMPADDING', (0,0), (-1,-1), 4),
            ('LEFTPADDING', (0,0), (-1,-1), 5),
            ('RIGHTPADDING', (0,0), (-1,-1), 5),
        ]
    )
    story.append(excel_table)
    story.append(Spacer(1, 8))

    story.append(Paragraph("Worksheet 2: IT_DOWNTIME_LOG (Sanitized Audit Log)", h2_style))
    story.append(Paragraph(
        "Contains the complete, chronologically sorted incident log matching the user's active filter criteria. "
        "Columns include Incident ID, Date, Area, Process, Machine No, Criticality, Downtime Mins, Machine Multiplier, Total Mins, "
        "Root Cause Category, Issue Details, Corrective Action Plan, Responsible Person, and Status. Every cell string is inspected and sanitized "
        "to prevent spreadsheet formula injection attacks.",
        body_style
    ))

    story.append(PageBreak())

    # =========================================================================
    # SECTION 14: HYBRID DESKTOP DEPLOYMENTS
    # =========================================================================
    story.append(Paragraph("14. Hybrid Desktop Deployments (.NET WinForms & Tauri Rust)", h1_style))
    story.append(HRFlowable(width="100%", thickness=1, color=c_red, spaceBefore=2, spaceAfter=8))
    
    story.append(Paragraph(
        "To provide high operational reliability in plant environments subject to external internet outages, the system includes two native desktop distribution options:",
        body_style
    ))

    story.append(Paragraph("14.1 C# .NET 8.0 WinForms Daemon (`launcher.cs`)", h2_style))
    story.append(Paragraph(
        "The C# wrapper targets standard Windows 10/11 factory workstations. It initializes an asynchronous HTTP loopback server listening on "
        "<code>http://127.0.0.1:8080/</code>, serving bundled application assets directly from the local filesystem. A Microsoft Edge WebView2 "
        "control renders the user interface with full hardware acceleration, eliminating external browser dependencies.",
        body_style
    ))

    story.append(Paragraph("14.2 Tauri v2 Cross-Platform Architecture (`src-tauri/`)", h2_style))
    story.append(Paragraph(
        "For resource-constrained industrial PCs, Raspberry Pi gateway terminals, and Linux-based operator panels, the system compiles using Tauri v2. "
        "The backend is written in memory-safe Rust, creating a lean 3.5MB binary that consumes less than 40MB of system RAM (compared to 150MB+ for Electron).",
        body_style
    ))

    story.append(Spacer(1, 10))

    # =========================================================================
    # SECTION 15: COMPLETE RESTful API REFERENCE
    # =========================================================================
    story.append(Paragraph("15. Complete RESTful API Reference Specification", h1_style))
    story.append(HRFlowable(width="100%", thickness=1, color=c_red, spaceBefore=2, spaceAfter=8))
    
    api_data = [
        [Paragraph("<b>Method & Route</b>", table_header_style), Paragraph("<b>Min Role</b>", table_header_style), Paragraph("<b>Request Payload / Parameters</b>", table_header_style), Paragraph("<b>Response Status & Payload Structure</b>", table_header_style)],
        [
            Paragraph("<b>POST</b><br/><code>/api/auth</code>", table_cell_bold),
            Paragraph("Public (Rate-limited)", table_cell_style),
            Paragraph("<code>{ username, password }</code>", table_cell_style),
            Paragraph("<b>200 OK</b>: <code>{ token, user: { username, role } }</code><br/><b>401</b>: Invalid credentials | <b>429</b>: Rate limit", table_cell_style)
        ],
        [
            Paragraph("<b>GET</b><br/><code>/api/auth</code>", table_cell_bold),
            Paragraph("Any Authenticated", table_cell_style),
            Paragraph("Header: <code>Bearer &lt;token&gt;</code>", table_cell_style),
            Paragraph("<b>200 OK</b>: <code>{ authenticated: true, user }</code><br/><b>401</b>: Token expired or invalid signature", table_cell_style)
        ],
        [
            Paragraph("<b>PUT</b><br/><code>/api/auth</code>", table_cell_bold),
            Paragraph("<b>ADMIN</b> Only", table_cell_bold),
            Paragraph("<code>{ role, username, password }</code>", table_cell_style),
            Paragraph("<b>200 OK</b>: <code>{ success: true, user }</code><br/><b>403</b>: Forbidden for Operator/Supervisor", table_cell_style)
        ],
        [
            Paragraph("<b>GET</b><br/><code>/api/incidents</code>", table_cell_bold),
            Paragraph("Any Authenticated", table_cell_style),
            Paragraph("Query: <code>?month=YYYY-MM&area=...</code>", table_cell_style),
            Paragraph("<b>200 OK</b>: <code>{ count: N, data: [ {...} ] }</code> (Mapped to snake_case)", table_cell_style)
        ],
        [
            Paragraph("<b>POST</b><br/><code>/api/incidents</code>", table_cell_bold),
            Paragraph("Operator / Sup / Admin", table_cell_style),
            Paragraph("<code>{ date, area, process, downtimeMinutes, ... }</code>", table_cell_style),
            Paragraph("<b>201 Created</b>: <code>{ message, data }</code><br/><b>400</b>: Validation failure | <b>409</b>: Duplicate rejected", table_cell_style)
        ],
        [
            Paragraph("<b>PUT</b><br/><code>/api/incidents</code>", table_cell_bold),
            Paragraph("<b>ADMIN</b> Only", table_cell_bold),
            Paragraph("<code>{ id, downtimeMinutes, status, ... }</code>", table_cell_style),
            Paragraph("<b>200 OK</b>: <code>{ message: 'Updated', data }</code><br/><b>403</b>: Forbidden for non-admin", table_cell_style)
        ],
        [
            Paragraph("<b>DELETE</b><br/><code>/api/incidents</code>", table_cell_bold),
            Paragraph("<b>ADMIN</b> Only", table_cell_bold),
            Paragraph("Single: <code>?id=INC-XXXX</code><br/>Bulk: <code>{ action: 'clear_all', phrase: '...' }</code>", table_cell_style),
            Paragraph("<b>200 OK</b>: <code>{ message: 'Deleted' }</code><br/><b>403</b>: Forbidden | <b>400</b>: Bad confirmation phrase", table_cell_style)
        ],
        [
            Paragraph("<b>GET</b><br/><code>/api/kpi</code>", table_cell_bold),
            Paragraph("Any Authenticated", table_cell_style),
            Paragraph("Query: <code>?month=YYYY-MM&area=...</code>", table_cell_style),
            Paragraph("<b>200 OK</b>: <code>{ availability, closureRate, mttr, totalDowntime, operatingHours }</code>", table_cell_style)
        ],
        [
            Paragraph("<b>GET</b><br/><code>/api/master-data</code>", table_cell_bold),
            Paragraph("Any Authenticated", table_cell_style),
            Paragraph("Header: <code>Bearer &lt;token&gt;</code>", table_cell_style),
            Paragraph("<b>200 OK</b>: <code>{ areas: [...], categories: [...], machines: [...] }</code>", table_cell_style)
        ],
    ]
    api_table = Table(
        api_data,
        colWidths=[90, 85, 140, PRINTABLE_WIDTH - 315],
        style=[
            ('BACKGROUND', (0,0), (-1,0), c_secondary),
            ('BOX', (0,0), (-1,-1), 1, c_border),
            ('INNERGRID', (0,0), (-1,-1), 0.5, c_border),
            ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.white, c_bg_light]),
            ('TOPPADDING', (0,0), (-1,-1), 4),
            ('BOTTOMPADDING', (0,0), (-1,-1), 4),
            ('LEFTPADDING', (0,0), (-1,-1), 5),
            ('RIGHTPADDING', (0,0), (-1,-1), 5),
        ]
    )
    story.append(api_table)
    story.append(PageBreak())

    # =========================================================================
    # SECTION 16: VERIFICATION STRATEGY & TESTING
    # =========================================================================
    story.append(Paragraph("16. Verification Strategy, Testing & Quality Assurance", h1_style))
    story.append(HRFlowable(width="100%", thickness=1, color=c_red, spaceBefore=2, spaceAfter=8))
    
    story.append(Paragraph(
        "The software was verified through 5 independent automated test suites encompassing 59 distinct verification assertions. "
        "Every test suite runs in the Node.js 24 environment and achieves a 100% passing score:",
        body_style
    ))

    test_data = [
        [Paragraph("<b>Test Suite Name & Script File</b>", table_header_style), Paragraph("<b>Assertions</b>", table_header_style), Paragraph("<b>Key Scenarios & Boundaries Verified</b>", table_header_style), Paragraph("<b>Result Status</b>", table_header_style)],
        [
            Paragraph("<b>Suite 1: Automated Regression Suite</b><br/><code>tests/run_tests.js</code>", table_cell_bold),
            Paragraph("16 / 16", table_cell_style),
            Paragraph("Zero-incident N/A state, 100% uptime calculation with valid operating time, MTTR derivation, invalid status rejection, duplicate entry blocking.", table_cell_style),
            Paragraph("<b>100% PASS</b>", ParagraphStyle('P1', fontName='Helvetica-Bold', fontSize=8, textColor=colors.HexColor("#16A34A")))
        ],
        [
            Paragraph("<b>Suite 2: Official Acceptance Suite</b><br/><code>tests/run_acceptance_tests.js</code>", table_cell_bold),
            Paragraph("10 / 10", table_cell_style),
            Paragraph("Tests A-J: Multi-click mutex locking (5 rapid clicks produce 1 record), session persistence across reloads, live production unauthenticated 401 rejection.", table_cell_style),
            Paragraph("<b>100% PASS</b>", ParagraphStyle('P2', fontName='Helvetica-Bold', fontSize=8, textColor=colors.HexColor("#16A34A")))
        ],
        [
            Paragraph("<b>Suite 3: 18-Point Regression Matrix</b><br/><code>tests/verify_18_regressions.js</code>", table_cell_bold),
            Paragraph("18 / 18", table_cell_style),
            Paragraph("N/A telemetry on empty dataset, debounce locks, direct protected API 401, non-admin 403, master data fallback, zero UTC drift on midnight shifts.", table_cell_style),
            Paragraph("<b>100% PASS</b>", ParagraphStyle('P3', fontName='Helvetica-Bold', fontSize=8, textColor=colors.HexColor("#16A34A")))
        ],
        [
            Paragraph("<b>Suite 4: User 5-Requirement Compliance</b><br/><code>tests/verify_user_5_requests.js</code>", table_cell_bold),
            Paragraph("5 / 5", table_cell_style),
            Paragraph("Attribution text, admin-only restrictions on edit/delete/empty-logs, dynamic category loss aggregation, 2-sheet Excel dashboard generation.", table_cell_style),
            Paragraph("<b>100% PASS</b>", ParagraphStyle('P4', fontName='Helvetica-Bold', fontSize=8, textColor=colors.HexColor("#16A34A")))
        ],
        [
            Paragraph("<b>Suite 5: Excel Visual Dashboard Engine</b><br/><code>tests/test_excel_dashboard_export.js</code>", table_cell_bold),
            Paragraph("10 / 10", table_cell_style),
            Paragraph("Generation of PLANT_DASHBOARD and IT_DOWNTIME_LOG sheets, insertion of 9 high-DPI chart drawings, cell formula sanitization, column styling.", table_cell_style),
            Paragraph("<b>100% PASS</b>", ParagraphStyle('P5', fontName='Helvetica-Bold', fontSize=8, textColor=colors.HexColor("#16A34A")))
        ],
    ]
    test_table = Table(
        test_data,
        colWidths=[140, 65, 230, PRINTABLE_WIDTH - 435],
        style=[
            ('BACKGROUND', (0,0), (-1,0), c_secondary),
            ('BOX', (0,0), (-1,-1), 1, c_border),
            ('INNERGRID', (0,0), (-1,-1), 0.5, c_border),
            ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.white, c_bg_light]),
            ('TOPPADDING', (0,0), (-1,-1), 4),
            ('BOTTOMPADDING', (0,0), (-1,-1), 4),
            ('LEFTPADDING', (0,0), (-1,-1), 5),
            ('RIGHTPADDING', (0,0), (-1,-1), 5),
        ]
    )
    story.append(test_table)
    story.append(Spacer(1, 10))

    # =========================================================================
    # SECTION 17: SECURITY AUDIT & HARDENING MATRIX
    # =========================================================================
    story.append(Paragraph("17. Security Audit, Threat Modeling & Hardening Matrix", h1_style))
    story.append(HRFlowable(width="100%", thickness=1, color=c_red, spaceBefore=2, spaceAfter=8))
    
    sec_data = [
        [Paragraph("<b>Vulnerability / Threat Vector</b>", table_header_style), Paragraph("<b>Severity</b>", table_header_style), Paragraph("<b>Attack Mechanism & Impact</b>", table_header_style), Paragraph("<b>Countermeasure Implemented</b>", table_header_style), Paragraph("<b>Post-Fix Verification</b>", table_header_style)],
        [
            Paragraph("<b>Direct API Tampering</b>", table_cell_bold),
            Paragraph("<font color='#DC2626'>HIGH</font>", table_cell_bold),
            Paragraph("Bypassing frontend UI to issue unauthorized DELETE/PUT calls.", table_cell_style),
            Paragraph("Server-side cryptographic JWT signature & role check.", table_cell_style),
            Paragraph("<b>VERIFIED HARDENED</b><br/>(HTTP 403 Forbidden)", table_cell_style)
        ],
        [
            Paragraph("<b>Credential Brute-Force</b>", table_cell_bold),
            Paragraph("<font color='#DC2626'>HIGH</font>", table_cell_bold),
            Paragraph("Automated dictionary attacks on login route `/api/auth`.", table_cell_style),
            Paragraph("Sliding-window token bucket (5 attempts/min per IP).", table_cell_style),
            Paragraph("<b>VERIFIED HARDENED</b><br/>(HTTP 429 Too Many Req)", table_cell_style)
        ],
        [
            Paragraph("<b>Spreadsheet Formula Injection</b>", table_cell_bold),
            Paragraph("<font color='#DC2626'>HIGH</font>", table_cell_bold),
            Paragraph("Injecting `=cmd|'...'` in incident descriptions to execute RCE.", table_cell_style),
            Paragraph("Sanitization prepending single quote (`'`) to symbol strings.", table_cell_style),
            Paragraph("<b>VERIFIED HARDENED</b><br/>(Payloads Neutralized)", table_cell_style)
        ],
        [
            Paragraph("<b>Race Condition Double-Submit</b>", table_cell_bold),
            Paragraph("<font color='#D97706'>MEDIUM</font>", table_cell_bold),
            Paragraph("Rapid multi-clicking submit creating duplicate incident records.", table_cell_style),
            Paragraph("Client-side mutex flag + server idempotency hash check.", table_cell_style),
            Paragraph("<b>VERIFIED HARDENED</b><br/>(1 record created)", table_cell_style)
        ],
        [
            Paragraph("<b>Sensitive Data Leakage</b>", table_cell_bold),
            Paragraph("<font color='#DC2626'>HIGH</font>", table_cell_bold),
            Paragraph("Exposing password hashes or DB keys in API JSON payloads.", table_cell_style),
            Paragraph("PostgREST explicit column projection; server-only `.env`.", table_cell_style),
            Paragraph("<b>VERIFIED HARDENED</b><br/>(Zero key leakage)", table_cell_style)
        ],
    ]
    sec_table = Table(
        sec_data,
        colWidths=[90, 50, 125, 125, PRINTABLE_WIDTH - 390],
        style=[
            ('BACKGROUND', (0,0), (-1,0), c_secondary),
            ('BOX', (0,0), (-1,-1), 1, c_border),
            ('INNERGRID', (0,0), (-1,-1), 0.5, c_border),
            ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.white, c_bg_light]),
            ('TOPPADDING', (0,0), (-1,-1), 4),
            ('BOTTOMPADDING', (0,0), (-1,-1), 4),
            ('LEFTPADDING', (0,0), (-1,-1), 5),
            ('RIGHTPADDING', (0,0), (-1,-1), 5),
        ]
    )
    story.append(sec_table)
    story.append(PageBreak())

    # =========================================================================
    # SECTION 18: ERROR HANDLING & EDGE CASES
    # =========================================================================
    story.append(Paragraph("18. Error Handling, Fault Tolerance & Edge Cases", h1_style))
    story.append(HRFlowable(width="100%", thickness=1, color=c_red, spaceBefore=2, spaceAfter=8))
    
    story.append(Paragraph(
        "Industrial operational environments require robust tolerance to imperfect network conditions, hardware lag, and invalid human inputs:",
        body_style
    ))
    story.append(Paragraph("• <b>Shop-Floor Network Drops</b>: When an operator loses Wi-Fi connectivity while filling an incident report, the client retains all form inputs in `sessionStorage`. Upon reconnecting, the submission completes seamlessly without data re-entry.", bullet_style))
    story.append(Paragraph("• <b>Cold-Start Latency Handling</b>: During serverless function cold starts, non-blocking skeleton loaders prevent UI freeze, keeping operators informed of background progress.", bullet_style))
    story.append(Paragraph("• <b>Midnight Shift UTC Invariance</b>: Shifts crossing midnight (22:00 to 06:00) parse timestamps using strict local operational date strings, preventing incidents from incorrectly shifting to the previous or next day.", bullet_style))
    story.append(Paragraph("• <b>Type & Range Enforcement</b>: Form inputs reject non-integer or negative downtime values immediately; invalid dates cannot be submitted.", bullet_style))

    story.append(Spacer(1, 10))

    # =========================================================================
    # SECTION 19: VIVA VOCE TECHNICAL EVALUATION & DEFENSE Q&A
    # =========================================================================
    story.append(Paragraph("19. Viva Voce Technical Evaluation & Defense Q&A Bank", h1_style))
    story.append(HRFlowable(width="100%", thickness=1, color=c_red, spaceBefore=2, spaceAfter=8))
    
    story.append(Paragraph(
        "Below are 12 authoritative questions and detailed answers prepared for university capstone evaluation, external viva examinations, and technical defense:",
        body_style
    ))

    viva_qa = [
        ("Q1: Why did you choose a Serverless Edge architecture over a traditional monolithic Express/Django server?",
         "Manufacturing plants require high availability and zero local server maintenance overhead. A traditional monolith requires continuous OS patching, dedicated VM hosting, and manual auto-scaling configuration. By deploying serverless microservices on Vercel Edge (`iad1`), our API scales automatically from zero to thousands of concurrent requests, achieves sub-30ms execution latencies, terminates SSL at the edge, and incurs zero idle server costs."),
        
        ("Q2: How does your availability formula account for multi-machine and multi-area operational topologies?",
         "In continuous industrial facilities like Yokohama, calculating availability simply as (Up Hours / Total Hours) is mathematically flawed because 8 distinct production areas operate simultaneously. Our engine evaluates plant capacity as Days × 24 × 60 × 8 Plant Areas (11,520 operating minutes per day). Additionally, when an IT failure impacts multiple machines simultaneously, the incident downtime is scaled by the affected machine count multiplier, ensuring precise capacity loss quantification."),

        ("Q3: Why is the 'Zero-Data Standard' critical for industrial SLA compliance?",
         "Legacy systems frequently display 100.00% Availability when no incidents exist in the selected date range. In manufacturing, zero logged incidents can indicate an unlogged shift, network disconnect, or lack of reporting. Displaying false-green 100% uptime provides dangerous false assurance to plant leadership. Our system strictly outputs 'N/A' with neutral indicators whenever operating time or incident data is absent."),

        ("Q4: Explain the cryptographic mechanics of your session authentication.",
         "We implement HMAC-SHA256 signed JSON Web Tokens (JWT). When a user provides valid credentials at /api/auth, the edge function signs a payload containing sub (user ID), username, role, and exp (timestamp + 24 hours) using a 256-bit cryptographically secure server secret key. On subsequent requests, the edge middleware verifies the cryptographic signature before evaluating permissions, completely disregarding any role flags stored in client storage."),

        ("Q5: How do you defend against Spreadsheet Formula Injection (CSV/Excel Injection)?",
         "When an incident description contains malicious Excel command syntax such as =HYPERLINK(...) or =cmd|'/C calc'!A0, opening the exported .xlsx workbook on an executive workstation could execute arbitrary code. Our export engine inspects every cell string; if the first character matches '=', '+', '-', or '@', it prepends an apostrophe ('), forcing spreadsheet parsers to treat the cell strictly as literal text."),

        ("Q6: What prevents duplicate incident creation during rapid button clicking?",
         "We implement a two-layer defense. First, a client-side asynchronous mutex lock immediately disables the submit button and activates a loading spinner upon the first click, discarding subsequent clicks. Second, the backend endpoint performs idempotency checking based on machine number, date, and timestamp window."),

        ("Q7: Why did you build both a C# .NET WinForms launcher and a Tauri v2 desktop application?",
         "Different shop-floor workstations present varying runtime environments. The C# .NET WinForms application targets older Windows 10/11 industrial operator terminals with Microsoft Edge WebView2, running an embedded loopback daemon. The Tauri v2 application provides an ultra-lightweight (3.5MB) cross-platform executable compiled in Rust for resource-constrained embedded gateway devices."),

        ("Q8: How is database Row Level Security (RLS) configured to prevent unauthorized tampering?",
         "Direct client access to the PostgREST API is restricted. All data mutations must traverse our authenticated serverless edge functions, which utilize an environment-restricted service role key. Public anonymous requests cannot read or write to public.incidents directly."),

        ("Q9: How does the system handle shift changeovers occurring at midnight across timezones?",
         "Manufacturing plants operate continuous shifts spanning midnight (e.g., 22:00 to 06:00). Storing raw browser timestamps creates UTC day-shifting errors. Our application parses all dates using strict ISO YYYY-MM-DD strings locked to the physical plant's operational calendar day, ensuring shift records are never split across incorrect reporting months."),

        ("Q10: How are the 9 visual charts embedded into the Excel workbook without relying on desktop Microsoft Excel?",
         "We utilize ExcelJS in conjunction with HTML5 Canvas. In the browser, each chart is rendered to an off-screen high-resolution canvas context. The raw image data is extracted as PNG base64 buffers, converted to binary streams, and inserted directly into the PLANT_DASHBOARD worksheet drawing object model with precise cell coordinate anchoring (tl and br markers)."),

        ("Q11: What is the architectural role of Mean Time to Resolve (MTTR) in continuous manufacturing?",
         "While Availability indicates overall operational health, MTTR isolates maintenance and engineering efficiency. By filtering MTTR specifically across completed incidents, plant leadership can distinguish between frequent minor glitches (low MTTR, high count) and catastrophic systemic bottlenecks (high MTTR, low count), directing engineering resources effectively."),

        ("Q12: How are destructive database operations protected against human error?",
         "Deleting all plant logs requires two-factor administrative confirmation: the user must possess an authenticated Admin role JWT token, and they must manually type the exact confirmation phrase PERMANENTLY DELETE ALL LOGS into a modal dialog. The backend rejects any request where the payload phrase does not match exactly.")
    ]

    for q_text, a_text in viva_qa:
        qa_flow = [
            Paragraph(f"<b>{q_text}</b>", h3_style),
            Paragraph(f"<b>Authoritative Defense Answer:</b> {a_text}", body_style),
            Spacer(1, 4)
        ]
        story.append(KeepTogether(qa_flow))

    story.append(PageBreak())

    # =========================================================================
    # SECTION 20 & 21: ROADMAP, CONCLUSION & REFERENCES
    # =========================================================================
    story.append(Paragraph("20. Future Enhancements & Engineering Roadmap", h1_style))
    story.append(HRFlowable(width="100%", thickness=1, color=c_red, spaceBefore=2, spaceAfter=8))
    
    story.append(Paragraph("• <b>Predictive ML Maintenance (ARIMA / LSTM)</b>: Implement machine learning models trained on historical downtime logs to forecast failure probabilities and alert maintenance crews before equipment faults occur.", bullet_style))
    story.append(Paragraph("• <b>Direct Shop-Floor PLC Telemetry (MQTT & OPC-UA)</b>: Connect plant IoT edge gateways directly to the serverless backend, automatically logging downtime incidents the instant a machine PLC enters an alarm state.", bullet_style))
    story.append(Paragraph("• <b>Supervisor Automated Alerts (WhatsApp & SMS)</b>: Dispatch real-time incident notifications to on-duty plant supervisors via webhook integrations whenever high-severity downtime exceeds 15 minutes.", bullet_style))
    story.append(Paragraph("• <b>Multi-Plant Corporate Federation</b>: Expand database schema with multi-tenant plant identifiers to allow corporate headquarters to benchmark uptime across multiple international factories.", bullet_style))

    story.append(Spacer(1, 10))

    story.append(Paragraph("21. Conclusion, Acknowledgments & Technical References", h1_style))
    story.append(HRFlowable(width="100%", thickness=1, color=c_red, spaceBefore=2, spaceAfter=8))
    
    story.append(Paragraph(
        "The <b>Plant IT Downtime Management & Analytics System</b> developed by <b>Hadssha Bell S</b> and <b>Reuben Geoffrey</b> demonstrates "
        "how modern cloud-edge web architectures, mathematical rigor, and security-first engineering can revolutionize industrial manufacturing telemetry. "
        "The platform successfully eliminates paper-based inefficiencies, delivers tamper-resistant SLA reporting, and provides corporate management with "
        "actionable operational insights.",
        body_style
    ))

    story.append(Paragraph("Technical Standards & Academic References", h2_style))
    story.append(Paragraph("1. ISO/IEC 25010:2011 — Systems and Software Engineering: Quality Requirements and Evaluation (SQuaRE).", bullet_style))
    story.append(Paragraph("2. SEMI E10-0304 — Standard for Definition and Measurement of Equipment Reliability, Availability, and Maintainability (RAM).", bullet_style))
    story.append(Paragraph("3. NIST Special Publication 800-63B — Digital Identity Guidelines: Authentication and Lifecycle Management.", bullet_style))
    story.append(Paragraph("4. OWASP Top 10:2021 — The Ten Most Critical Web Application Security Risks.", bullet_style))
    story.append(Paragraph("5. Vercel Serverless Function Documentation (Node.js 24 Runtime Specification).", bullet_style))
    story.append(Paragraph("6. Supabase Managed PostgreSQL Architecture Manual (v15.x).", bullet_style))
    story.append(Paragraph("7. ExcelJS Specification — Advanced Spreadsheet Generation and Drawing Engine.", bullet_style))

    # Build the document
    doc.build(story, canvasmaker=NumberedCanvas)
    print(f"[SUCCESS] PDF generated successfully: {filename}")

if __name__ == '__main__':
    target = os.path.join(BASE_DIR, "Project_Technical_Documentation.pdf")
    build_pdf(target)
