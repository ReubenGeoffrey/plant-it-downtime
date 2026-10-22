import os
import sys
import pptx
from pptx.util import Inches, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN
from pptx.enum.shapes import MSO_SHAPE

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# 16:9 Widescreen dimensions
SLIDE_WIDTH = Inches(13.333)
SLIDE_HEIGHT = Inches(7.5)

# Industrial Yokohama Palette
C_BG_DARK = RGBColor(11, 15, 25)       # #0B0F19 Deep Charcoal Slate
C_CARD_BG = RGBColor(30, 41, 59)      # #1E293B Dark Slate Card
C_CARD_BORDER = RGBColor(51, 65, 85)  # #334155 Slate Border
C_RED = RGBColor(230, 0, 18)          # #E60012 Yokohama Corporate Red
C_WHITE = RGBColor(255, 255, 255)
C_MUTED = RGBColor(148, 163, 184)     # #94A3B8 Slate Text
C_BLUE = RGBColor(96, 165, 250)       # #60A5FA Electric Sky Blue
C_GREEN = RGBColor(16, 185, 129)      # #10B981 Emerald Target Green
C_YELLOW = RGBColor(245, 158, 11)     # #F59E0B Warning Amber

def set_slide_background(slide):
    """Draws a full-bleed dark industrial background rectangle."""
    bg = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0), Inches(0), SLIDE_WIDTH, SLIDE_HEIGHT)
    bg.fill.solid()
    bg.fill.fore_color.rgb = C_BG_DARK
    bg.line.fill.background()
    return bg

def add_header(slide, title_text, category_text="YOKOHAMA INDUSTRIAL MES"):
    """Adds a standardized top header banner with category tag and accent line."""
    # Top accent line
    line = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0.8), Inches(0.4), Inches(11.733), Inches(0.04))
    line.fill.solid()
    line.fill.fore_color.rgb = C_RED
    line.line.fill.background()

    # Category & Title box
    txBox = slide.shapes.add_textbox(Inches(0.8), Inches(0.45), Inches(9.0), Inches(0.9))
    tf = txBox.text_frame
    tf.word_wrap = True
    tf.margin_left = tf.margin_top = tf.margin_right = tf.margin_bottom = 0

    p_cat = tf.paragraphs[0]
    p_cat.text = category_text.upper()
    p_cat.font.name = "Arial"
    p_cat.font.size = Pt(9.5)
    p_cat.font.bold = True
    p_cat.font.color.rgb = C_RED

    p_title = tf.add_paragraph()
    p_title.text = title_text
    p_title.font.name = "Arial"
    p_title.font.size = Pt(20)
    p_title.font.bold = True
    p_title.font.color.rgb = C_WHITE

    # Right branding watermark
    rightBox = slide.shapes.add_textbox(Inches(9.5), Inches(0.45), Inches(3.0), Inches(0.8))
    rtf = rightBox.text_frame
    rtf.word_wrap = True
    rtf.margin_left = rtf.margin_top = rtf.margin_right = rtf.margin_bottom = 0
    rp = rtf.paragraphs[0]
    rp.alignment = PP_ALIGN.RIGHT
    rp.text = "Hadssha Bell S & Reuben Geoffrey"
    rp.font.name = "Arial"
    rp.font.size = Pt(9)
    rp.font.bold = True
    rp.font.color.rgb = C_MUTED

    rp2 = rtf.add_paragraph()
    rp2.alignment = PP_ALIGN.RIGHT
    rp2.text = "Production v5.3  |  October 2026"
    rp2.font.name = "Arial"
    rp2.font.size = Pt(8.5)
    rp2.font.color.rgb = C_MUTED

def add_card(slide, left, top, width, height, title=None, border_color=C_CARD_BORDER):
    """Draws a rounded slate card container for grouping metrics or content."""
    card = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, left, top, width, height)
    card.fill.solid()
    card.fill.fore_color.rgb = C_CARD_BG
    card.line.color.rgb = border_color
    card.line.width = Pt(1)

    if title:
        tb = slide.shapes.add_textbox(left + Inches(0.2), top + Inches(0.15), width - Inches(0.4), Inches(0.4))
        tf = tb.text_frame
        tf.word_wrap = True
        tf.margin_left = tf.margin_top = tf.margin_right = tf.margin_bottom = 0
        p = tf.paragraphs[0]
        p.text = title.upper()
        p.font.name = "Arial"
        p.font.size = Pt(11)
        p.font.bold = True
        p.font.color.rgb = C_RED

    return card

def set_speaker_notes(slide, notes_text):
    """Adds speaker notes to the slide for oral viva voce defense and presentation delivery."""
    notes_slide = slide.notes_slide
    text_frame = notes_slide.notes_text_frame
    text_frame.text = notes_text


def build_presentation():
    prs = pptx.Presentation()
    prs.slide_width = SLIDE_WIDTH
    prs.slide_height = SLIDE_HEIGHT
    blank_layout = prs.slide_layouts[6]

    # =========================================================================
    # SLIDE 1: TITLE SLIDE
    # =========================================================================
    s1 = prs.slides.add_slide(blank_layout)
    set_slide_background(s1)

    # Accent Top Stripe
    t_bar = s1.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0), Inches(0), SLIDE_WIDTH, Inches(0.12))
    t_bar.fill.solid()
    t_bar.fill.fore_color.rgb = C_RED
    t_bar.line.fill.background()

    # Title Card
    c_title = add_card(s1, Inches(1.0), Inches(1.2), Inches(11.333), Inches(5.1), border_color=C_RED)

    tb = s1.shapes.add_textbox(Inches(1.5), Inches(1.6), Inches(10.333), Inches(4.3))
    tf = tb.text_frame
    tf.word_wrap = True
    
    p0 = tf.paragraphs[0]
    p0.text = "YOKOHAMA INDUSTRIAL MES PLATFORM  •  ENGINEERING CAPSTONE"
    p0.font.name = "Arial"
    p0.font.size = Pt(11)
    p0.font.bold = True
    p0.font.color.rgb = C_RED

    p1 = tf.add_paragraph()
    p1.text = "Plant IT Downtime Management\n& Analytics System"
    p1.font.name = "Arial"
    p1.font.size = Pt(32)
    p1.font.bold = True
    p1.font.color.rgb = C_WHITE
    p1.space_before = Pt(8)
    p1.space_after = Pt(12)

    p2 = tf.add_paragraph()
    p2.text = "High-Availability Operational Telemetry, Zero-Data Standard, Automated Dual-Sheet Excel Engine & Multi-Tier RBAC"
    p2.font.name = "Arial"
    p2.font.size = Pt(13)
    p2.font.color.rgb = C_MUTED
    p2.space_after = Pt(20)

    p3 = tf.add_paragraph()
    p3.text = "System Architects & Lead Engineers: Hadssha Bell S & Reuben Geoffrey"
    p3.font.name = "Arial"
    p3.font.size = Pt(14)
    p3.font.bold = True
    p3.font.color.rgb = C_BLUE

    p4 = tf.add_paragraph()
    p4.text = "Live Production URL: https://plant-it-downtime.vercel.app/  |  Status: Verified Production Beta v5.3"
    p4.font.name = "Arial"
    p4.font.size = Pt(10.5)
    p4.font.color.rgb = C_WHITE
    p4.space_before = Pt(6)

    set_speaker_notes(s1, 
        "Welcome to the technical evaluation and defense of the Plant IT Downtime Management & Analytics System. "
        "This project was engineered and deployed by Hadssha Bell S and Reuben Geoffrey for continuous tire manufacturing "
        "at Yokohama. The system bridges shop-floor incident logging with executive mathematical telemetry. "
        "It is currently live in production on Vercel Edge, verified with 5 automated test suites and 100% pass rate.")

    # =========================================================================
    # SLIDE 2: EXECUTIVE SUMMARY & INDUSTRIAL CONTEXT
    # =========================================================================
    s2 = prs.slides.add_slide(blank_layout)
    set_slide_background(s2)
    add_header(s2, "Executive Summary & Continuous Manufacturing Context", "INDUSTRIAL PROBLEM BACKGROUND")

    # 3 Cards Layout
    c1 = add_card(s2, Inches(0.8), Inches(1.5), Inches(3.64), Inches(5.2), "The Heavy Industry Reality")
    tb1 = s2.shapes.add_textbox(Inches(1.0), Inches(2.1), Inches(3.24), Inches(4.3))
    tf1 = tb1.text_frame
    tf1.word_wrap = True
    tf1.paragraphs[0].text = "24/7/365 Continuous Production"
    tf1.paragraphs[0].font.bold = True
    tf1.paragraphs[0].font.size = Pt(12)
    tf1.paragraphs[0].font.color.rgb = C_WHITE
    
    p = tf1.add_paragraph()
    p.text = "• 3 operational 8-hour shifts daily.\n• 8 interconnected manufacturing areas:\n  - Mixing (Banbury)\n  - Extrusion & Calender\n  - Tire Building (TBM)\n  - Curing Press Banks\n  - Final Inspection X-Ray\n  - AGV Logistics & Common IT."
    p.font.size = Pt(10)
    p.font.color.rgb = C_MUTED
    p.space_before = Pt(8)

    p2 = tf1.add_paragraph()
    p2.text = "Severe Outage Impact: Any IT/OT freeze halts assembly lines, generating losses exceeding thousands of dollars per minute."
    p2.font.size = Pt(10)
    p2.font.bold = True
    p2.font.color.rgb = C_YELLOW
    p2.space_before = Pt(10)

    c2 = add_card(s2, Inches(4.84), Inches(1.5), Inches(3.64), Inches(5.2), "The Legacy System Failure")
    tb2 = s2.shapes.add_textbox(Inches(5.04), Inches(2.1), Inches(3.24), Inches(4.3))
    tf2 = tb2.text_frame
    tf2.word_wrap = True
    tf2.paragraphs[0].text = "Manual Paper & Drifting Sheets"
    tf2.paragraphs[0].font.bold = True
    tf2.paragraphs[0].font.size = Pt(12)
    tf2.paragraphs[0].font.color.rgb = C_WHITE

    p = tf2.add_paragraph()
    p.text = "1. Paper Shift Handover Sheets: Transcribed hours later with lost details.\n\n2. Spreadsheet Drift: Multiple versions of Excel files on local hard drives with broken formulas.\n\n3. False 100% 'Ghost Green': Empty weekends or missed logs reported as 100% uptime.\n\n4. Multi-Click Double Submissions: Slow network causes operators to create 3-5 duplicate records."
    p.font.size = Pt(10)
    p.font.color.rgb = C_MUTED
    p.space_before = Pt(8)

    c3 = add_card(s2, Inches(8.88), Inches(1.5), Inches(3.64), Inches(5.2), "Our Engineering Mission")
    tb3 = s2.shapes.add_textbox(Inches(9.08), Inches(2.1), Inches(3.24), Inches(4.3))
    tf3 = tb3.text_frame
    tf3.word_wrap = True
    tf3.paragraphs[0].text = "Authoritative Digital MES"
    tf3.paragraphs[0].font.bold = True
    tf3.paragraphs[0].font.size = Pt(12)
    tf3.paragraphs[0].font.color.rgb = C_GREEN

    p = tf3.add_paragraph()
    p.text = "• Rapid Incident Ingestion: Under 15 seconds from terminal to cloud DB.\n\n• Rigorous Mathematical Engine: Exact formula (Days × 11,520 min capacity across 8 areas).\n\n• Zero-Data Standard: Output N/A instead of deceptive 100% false green.\n\n• Enterprise Security: Cryptographic JWT, sliding-window rate limiting, and RBAC.\n\n• Automated Visual Reporting: 1-click dual-sheet Excel with 9 embedded charts."
    p.font.size = Pt(10)
    p.font.color.rgb = C_MUTED
    p.space_before = Pt(8)

    set_speaker_notes(s2,
        "Here we articulate the operational reality of Yokohama. Automotive tire manufacturing does not stop; Banbury mixers and "
        "curing presses run 24 hours a day. The legacy workflow of paper handover logs and desktop spreadsheets caused four critical failures: "
        "data loss, broken formulas, concurrency duplicates, and most dangerously, the 'ghost green' effect where zero data was shown as 100% availability.")

    # =========================================================================
    # SLIDE 3: COMPARATIVE ANALYSIS (LEGACY VS PROPOSED)
    # =========================================================================
    s3 = prs.slides.add_slide(blank_layout)
    set_slide_background(s3)
    add_header(s3, "Comparative Analysis: Legacy Workflow vs. Proposed Platform", "ARCHITECTURAL TRANSFORMATION")

    # Full Width Card with Comparison Table
    add_card(s3, Inches(0.8), Inches(1.5), Inches(11.733), Inches(5.2), "System Evaluation Matrix across 6 Core Dimensions")

    # Let's add a structured table
    table_shape = s3.shapes.add_table(7, 3, Inches(1.1), Inches(2.1), Inches(11.133), Inches(4.2))
    table = table_shape.table
    table.columns[0].width = Inches(2.6)
    table.columns[1].width = Inches(4.2)
    table.columns[2].width = Inches(4.333)

    headers = ["Operational Dimension", "Legacy Setup (Manual / Excel)", "Proposed Platform (Yokohama MES)"]
    for col_idx, text in enumerate(headers):
        cell = table.cell(0, col_idx)
        cell.fill.solid()
        cell.fill.fore_color.rgb = C_CARD_BORDER
        p = cell.text_frame.paragraphs[0]
        p.text = text
        p.font.name = "Arial"
        p.font.size = Pt(10.5)
        p.font.bold = True
        p.font.color.rgb = C_WHITE

    row_data = [
        ("Data Ingestion Speed", "Manual paper logbooks; transcribed hours after shift.", "Instant entry (<15s) via responsive web portal or desktop daemon."),
        ("Availability Formula", "Single-machine uptime hours / calendar hours (Flawed).", "Standardized Plant Formula: Days × 1440 × 8 Plant Areas (11,520 min/day)."),
        ("Zero-Data State", "Deceptive 100.00% 'ghost green' uptime displayed.", "Mathematically sound 'N/A' telemetry with neutral gray indicators."),
        ("Security & RBAC", "None. Shared files allow unauthorized edits and deletions.", "Server-enforced RBAC (Operator, Supervisor, Admin) via HMAC-SHA256 JWT."),
        ("Executive Reporting", "Manual copy-pasting of charts taking 2-3 hours.", "Automated 1-click dual-sheet Excel workbook with 9 embedded charts."),
        ("Concurrency Defense", "Frequent file locking collisions and duplicate rows.", "Client-side mutex locking + server-side duplicate hash prevention.")
    ]

    for row_idx, (d, leg, prop) in enumerate(row_data, start=1):
        cell_0 = table.cell(row_idx, 0)
        cell_0.text_frame.paragraphs[0].text = d
        cell_0.text_frame.paragraphs[0].font.size = Pt(9.5)
        cell_0.text_frame.paragraphs[0].font.bold = True
        cell_0.text_frame.paragraphs[0].font.color.rgb = C_BLUE

        cell_1 = table.cell(row_idx, 1)
        cell_1.text_frame.paragraphs[0].text = leg
        cell_1.text_frame.paragraphs[0].font.size = Pt(9)
        cell_1.text_frame.paragraphs[0].font.color.rgb = C_MUTED

        cell_2 = table.cell(row_idx, 2)
        cell_2.text_frame.paragraphs[0].text = prop
        cell_2.text_frame.paragraphs[0].font.size = Pt(9)
        cell_2.text_frame.paragraphs[0].font.bold = True
        cell_2.text_frame.paragraphs[0].font.color.rgb = C_GREEN

    set_speaker_notes(s3,
        "This slide presents a clear, academic comparison between the legacy setup and our proposed platform. "
        "Highlight the availability formula difference: legacy tools divided uptime by calendar time for 1 machine, ignoring the fact "
        "that 8 independent plant areas run in parallel. Also highlight our mutex debouncing that stops duplicate submissions.")

    # =========================================================================
    # SLIDE 4: COMPLETE TECHNOLOGY STACK INVENTORY
    # =========================================================================
    s4 = prs.slides.add_slide(blank_layout)
    set_slide_background(s4)
    add_header(s4, "Verified Technology Stack & Production Architecture", "ENGINEERING SPECIFICATION")

    # 4 Cards Grid
    card_w = Inches(2.75)
    card_h = Inches(5.2)

    # Col 1: Frontend & UI
    add_card(s4, Inches(0.8), Inches(1.5), card_w, card_h, "1. Frontend Layer")
    tb = s4.shapes.add_textbox(Inches(0.95), Inches(2.1), card_w - Inches(0.3), Inches(4.3))
    tf = tb.text_frame
    tf.word_wrap = True
    tf.paragraphs[0].text = "Zero-Compile SPA"
    tf.paragraphs[0].font.bold = True
    tf.paragraphs[0].font.size = Pt(11)
    tf.paragraphs[0].font.color.rgb = C_WHITE
    p = tf.add_paragraph()
    p.text = "• Vanilla ECMAScript (ES2023)\n• Tailwind CSS 3.4 (Yokohama Dark Theme)\n• FontAwesome 6 Pro (40+ industrial icons)\n• Chart.js 4.4.1 (Area/Process/Category)\n• HTML5 Canvas 2D Speedometer Gauge (Calibrated needle & target arc)\n• ExcelJS 4.4.0 (In-browser dual-sheet workbook engine)"
    p.font.size = Pt(9)
    p.font.color.rgb = C_MUTED
    p.space_before = Pt(6)

    # Col 2: Serverless Edge
    add_card(s4, Inches(3.75), Inches(1.5), card_w, card_h, "2. Serverless Edge")
    tb = s4.shapes.add_textbox(Inches(3.9), Inches(2.1), card_w - Inches(0.3), Inches(4.3))
    tf = tb.text_frame
    tf.word_wrap = True
    tf.paragraphs[0].text = "Vercel Global Edge"
    tf.paragraphs[0].font.bold = True
    tf.paragraphs[0].font.size = Pt(11)
    tf.paragraphs[0].font.color.rgb = C_WHITE
    p = tf.add_paragraph()
    p.text = "• Node.js 24 Serverless Functions\n• Region: iad1 (US-East, <30ms DB RTT)\n• Microservices:\n  - api/auth.js (JWT & logins)\n  - api/incidents.js (CRUD & audits)\n  - api/kpi.js (Math telemetry)\n  - api/master-data.js (Machines)\n• Global TLS 1.3 Anycast Edge Network\n• Sub-120ms global API latency"
    p.font.size = Pt(9)
    p.font.color.rgb = C_MUTED
    p.space_before = Pt(6)

    # Col 3: Cloud Database & Security
    add_card(s4, Inches(6.7), Inches(1.5), card_w, card_h, "3. Cloud Database")
    tb = s4.shapes.add_textbox(Inches(6.85), Inches(2.1), card_w - Inches(0.3), Inches(4.3))
    tf = tb.text_frame
    tf.word_wrap = True
    tf.paragraphs[0].text = "Supabase PostgreSQL 15"
    tf.paragraphs[0].font.bold = True
    tf.paragraphs[0].font.size = Pt(11)
    tf.paragraphs[0].font.color.rgb = C_WHITE
    p = tf.add_paragraph()
    p.text = "• Managed Relational Cluster\n• ACID Transactions & Check Constraints\n• Tables: public.incidents, public.user_accounts\n• Security Gateways:\n  - HMAC-SHA256 Signed JWT (24h)\n  - Sliding-window rate limit (5 req/min)\n  - PostgREST projection (No hash leak)\n  - Service role mediated mutations"
    p.font.size = Pt(9)
    p.font.color.rgb = C_MUTED
    p.space_before = Pt(6)

    # Col 4: Desktop & QA
    add_card(s4, Inches(9.65), Inches(1.5), card_w, card_h, "4. Desktop & Testing")
    tb = s4.shapes.add_textbox(Inches(9.8), Inches(2.1), card_w - Inches(0.3), Inches(4.3))
    tf = tb.text_frame
    tf.word_wrap = True
    tf.paragraphs[0].text = "Hybrid Desktop & QA"
    tf.paragraphs[0].font.bold = True
    tf.paragraphs[0].font.size = Pt(11)
    tf.paragraphs[0].font.color.rgb = C_WHITE
    p = tf.add_paragraph()
    p.text = "• C# .NET 8 WinForms Launcher:\n  - Loopback HTTP daemon on :8080\n  - Embedded Edge WebView2 control\n• Tauri v2 Cross-Platform (Rust):\n  - 3.5MB binary, <40MB RAM usage\n• 5 Automated Test Suites (Node.js 24):\n  - 59 Assertions Passing 100%\n  - Mutex, empty state, RBAC, Excel tests"
    p.font.size = Pt(9)
    p.font.color.rgb = C_MUTED
    p.space_before = Pt(6)

    set_speaker_notes(s4,
        "This slide presents the verified technology inventory. Emphasize that there is zero fluff: we chose Vanilla JS for zero-compile overhead "
        "on factory browsers, Tailwind for high-contrast dark industrial styling, Node 24 serverless microservices in iad1 for sub-30ms database latency, "
        "and Supabase PostgreSQL for relational ACID guarantees. Notice also our dual desktop distribution: C# .NET and Tauri Rust.")

    # =========================================================================
    # SLIDE 5: SYSTEM ARCHITECTURE & HIGH-LEVEL DESIGN
    # =========================================================================
    s5 = prs.slides.add_slide(blank_layout)
    set_slide_background(s5)
    add_header(s5, "High-Level System Architecture & Microservice Topology", "SYSTEM DESIGN")

    # Add Card for Diagram
    add_card(s5, Inches(0.8), Inches(1.4), Inches(11.733), Inches(5.4))

    arch_img = os.path.join(BASE_DIR, "Architecture_Diagram.png")
    if os.path.exists(arch_img):
        s5.shapes.add_picture(arch_img, Inches(1.0), Inches(1.55), width=Inches(8.5), height=Inches(5.0))

    # Right side callout box
    tb = s5.shapes.add_textbox(Inches(9.7), Inches(1.6), Inches(2.6), Inches(5.0))
    tf = tb.text_frame
    tf.word_wrap = True
    p0 = tf.paragraphs[0]
    p0.text = "KEY ARCHITECTURAL HIGHLIGHTS"
    p0.font.bold = True
    p0.font.size = Pt(10.5)
    p0.font.color.rgb = C_RED

    highlights = [
        ("Decoupled 3-Tier Model", "Browser/Desktop clients isolated from raw DB access."),
        ("Edge Termination", "TLS 1.3 terminated at Vercel Anycast Edge nodes globally."),
        ("Co-Located Compute", "Serverless Node 24 functions in iad1 paired with AWS East DB."),
        ("Stateless JWT Auth", "HMAC-SHA256 signature checked on every protected call."),
        ("Hybrid Deployments", "Online cloud PWA + Offline C# / Rust local daemons.")
    ]
    for title, desc in highlights:
        p = tf.add_paragraph()
        p.text = f"• {title}: {desc}"
        p.font.size = Pt(8.5)
        p.font.color.rgb = C_MUTED
        p.space_before = Pt(8)

    set_speaker_notes(s5,
        "Figure 6.1 from our technical specification is shown here. It illustrates the complete three-tier architecture: "
        "The multi-platform client tier on top, the Vercel Edge compute tier in the center running Node.js 24 serverless microservices, "
        "and the Supabase PostgreSQL database tier on the bottom. Direct database access is blocked; all operations flow through the authenticated gateway.")

    # =========================================================================
    # SLIDE 6: DATA FLOW & TRANSACTIONAL PIPELINE
    # =========================================================================
    s6 = prs.slides.add_slide(blank_layout)
    set_slide_background(s6)
    add_header(s6, "Data Flow Architecture & 7-Step Transactional Pipeline", "TRANSACTION LIFECYCLE")

    add_card(s6, Inches(0.8), Inches(1.4), Inches(11.733), Inches(5.4))

    dfd_img = os.path.join(BASE_DIR, "Data_Flow_Diagram.png")
    if os.path.exists(dfd_img):
        s6.shapes.add_picture(dfd_img, Inches(1.0), Inches(1.55), width=Inches(8.5), height=Inches(5.0))

    # Right side breakdown
    tb = s6.shapes.add_textbox(Inches(9.7), Inches(1.6), Inches(2.6), Inches(5.0))
    tf = tb.text_frame
    tf.word_wrap = True
    p0 = tf.paragraphs[0]
    p0.text = "7-STEP PROCESSING FLOW"
    p0.font.bold = True
    p0.font.size = Pt(10.5)
    p0.font.color.rgb = C_RED

    steps = [
        "1. Mutex Lock & Validation: Block double-clicks, check fields.",
        "2. HTTPS Transport: Bearer JWT in Authorization header.",
        "3. Edge Rate Limiter: Sliding token bucket checks IP.",
        "4. Signature & RBAC: Edge decodes HMAC-SHA256 & role.",
        "5. PostgreSQL Insert: ACID commit with check constraints.",
        "6. Telemetry Recomputation: Invalidate cache, recalculate KPIs.",
        "7. Client Rendering: Speedometer sweeps to new position."
    ]
    for s in steps:
        p = tf.add_paragraph()
        p.text = s
        p.font.size = Pt(8.5)
        p.font.color.rgb = C_MUTED
        p.space_before = Pt(6)

    set_speaker_notes(s6,
        "This slide walks through the 7-step data pipeline for every downtime incident. Trace the lifecycle from the operator's browser: "
        "The mutex lock instantly prevents duplicate clicks. The payload travels over TLS 1.3 to Vercel edge, passes through the sliding-window "
        "rate limiter, verifies the JWT HMAC-SHA256 signature, commits to PostgreSQL, recalculates telemetry, and re-renders the speedometer.")

    # =========================================================================
    # SLIDE 7: CLOUD & EDGE DEPLOYMENT TOPOLOGY
    # =========================================================================
    s7 = prs.slides.add_slide(blank_layout)
    set_slide_background(s7)
    add_header(s7, "Cloud & Edge Deployment Topology", "INFRASTRUCTURE & DEPLOYMENT")

    add_card(s7, Inches(0.8), Inches(1.4), Inches(11.733), Inches(5.4))

    dep_img = os.path.join(BASE_DIR, "Deployment_Diagram.png")
    if os.path.exists(dep_img):
        s7.shapes.add_picture(dep_img, Inches(1.0), Inches(1.55), width=Inches(8.5), height=Inches(5.0))

    tb = s7.shapes.add_textbox(Inches(9.7), Inches(1.6), Inches(2.6), Inches(5.0))
    tf = tb.text_frame
    tf.word_wrap = True
    p0 = tf.paragraphs[0]
    p0.text = "INFRASTRUCTURE SPECS"
    p0.font.bold = True
    p0.font.size = Pt(10.5)
    p0.font.color.rgb = C_RED

    infra_items = [
        "300+ Edge Anycast PoPs: Vercel CDN delivers static assets with Brotli compression.",
        "Co-Located Compute: Functions run in iad1 to achieve <30ms database latency.",
        "PgBouncer Pooling: Supabase handles high-concurrency connection spikes.",
        "Automated CI/CD: Git commit 5d5947f automatically built and verified."
    ]
    for item in infra_items:
        p = tf.add_paragraph()
        p.text = f"• {item}"
        p.font.size = Pt(8.5)
        p.font.color.rgb = C_MUTED
        p.space_before = Pt(8)

    set_speaker_notes(s7,
        "Here is our production deployment infrastructure. The web client connects to Vercel's global Anycast Edge network with over 300 locations. "
        "Our serverless functions are pinned to region iad1 in Washington D.C., directly adjacent to Supabase's AWS US-East cluster. "
        "This minimizes round-trip database latency to under 30 milliseconds.")

    # =========================================================================
    # SLIDE 8: DATABASE SCHEMA & RELATIONAL MODELING
    # =========================================================================
    s8 = prs.slides.add_slide(blank_layout)
    set_slide_background(s8)
    add_header(s8, "Database Schema & Entity-Relationship Modeling", "DATA ARCHITECTURE")

    add_card(s8, Inches(0.8), Inches(1.4), Inches(11.733), Inches(5.4))

    erd_img = os.path.join(BASE_DIR, "Database_ER_Diagram.png")
    if os.path.exists(erd_img):
        s8.shapes.add_picture(erd_img, Inches(1.0), Inches(1.55), width=Inches(8.5), height=Inches(5.0))

    tb = s8.shapes.add_textbox(Inches(9.7), Inches(1.6), Inches(2.6), Inches(5.0))
    tf = tb.text_frame
    tf.word_wrap = True
    p0 = tf.paragraphs[0]
    p0.text = "RELATIONAL INTEGRITY"
    p0.font.bold = True
    p0.font.size = Pt(10.5)
    p0.font.color.rgb = C_RED

    schema_points = [
        "Primary Keys: Unique text IDs INC-YYYYMMDD-XXXX and UUIDs.",
        "Check Constraints: downtime_minutes > 0, affected_machines >= 1.",
        "Status Enum: Open, In Progress, Completed, Closed.",
        "Audit Columns: created_at, updated_at TIMESTAMPTZ triggers.",
        "User Table: public.user_accounts with salted PBKDF2/SHA256 hashes."
    ]
    for sp in schema_points:
        p = tf.add_paragraph()
        p.text = f"• {sp}"
        p.font.size = Pt(8.5)
        p.font.color.rgb = C_MUTED
        p.space_before = Pt(8)

    set_speaker_notes(s8,
        "Our relational database schema centers on public.incidents and public.user_accounts. "
        "Notice the database-level integrity: downtime_minutes must be strictly positive; affected machines must be at least 1; "
        "statuses are restricted via check constraints. This guarantees invalid data cannot be committed even if client validation were bypassed.")

    # =========================================================================
    # SLIDE 9: AUTHORITATIVE MATHEMATICAL FORMULATIONS
    # =========================================================================
    s9 = prs.slides.add_slide(blank_layout)
    set_slide_background(s9)
    add_header(s9, "Authoritative Mathematical Formulations & Zero-Data Standard", "TELEMETRY ENGINE")

    # 4 Formula Cards
    fw = Inches(5.7)
    fh = Inches(2.5)

    # Formula 1
    add_card(s9, Inches(0.8), Inches(1.5), fw, fh, "1. Plant Operating Minutes Formulation")
    tb = s9.shapes.add_textbox(Inches(1.0), Inches(2.1), fw - Inches(0.4), fh - Inches(0.7))
    tf = tb.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = "Capacity = Days × 24 hrs × 60 min × 8 Standard Plant Areas"
    p.font.bold = True
    p.font.size = Pt(11)
    p.font.color.rgb = C_WHITE
    p2 = tf.add_paragraph()
    p2.text = "Capacity = Days × 11,520 Operating Minutes / Day\n• Standard 30-day month = 345,600 Operating Minutes (5,760 hours).\n• Accounts for continuous simultaneous operation across all 8 plant departments."
    p2.font.size = Pt(9.5)
    p2.font.color.rgb = C_MUTED
    p2.space_before = Pt(6)

    # Formula 2
    add_card(s9, Inches(6.833), Inches(1.5), fw, fh, "2. Overall Plant Availability Percentage")
    tb = s9.shapes.add_textbox(Inches(7.033), Inches(2.1), fw - Inches(0.4), fh - Inches(0.7))
    tf = tb.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = "Availability % = [ (Operating Min - Downtime Min) / Operating Min ] × 100"
    p.font.bold = True
    p.font.size = Pt(11)
    p.font.color.rgb = C_WHITE
    p2 = tf.add_paragraph()
    p2.text = "Where Downtime Min = Σ (downtime_minutes × affected_machines).\n• Enterprise SLA Target: ≥ 99.00%\n• Warning Zone: 95.0% - 98.9% (Amber)\n• Critical Zone: < 95.0% (Red Alert)"
    p2.font.size = Pt(9.5)
    p2.font.color.rgb = C_MUTED
    p2.space_before = Pt(6)

    # Formula 3
    add_card(s9, Inches(0.8), Inches(4.2), fw, fh, "3. MTTR & Closure Rate Engine")
    tb = s9.shapes.add_textbox(Inches(1.0), Inches(4.8), fw - Inches(0.4), fh - Inches(0.7))
    tf = tb.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = "MTTR = Σ (Downtime of Completed) / Count(Completed)"
    p.font.bold = True
    p.font.size = Pt(11)
    p.font.color.rgb = C_WHITE
    p2 = tf.add_paragraph()
    p2.text = "Closure Rate % = [ Count(Completed + Closed) / Count(Total) ] × 100\n• MTTR strictly evaluates resolved events, avoiding skew from active tickets.\n• Closure rate highlights backlog accumulation across maintenance shifts."
    p2.font.size = Pt(9.5)
    p2.font.color.rgb = C_MUTED
    p2.space_before = Pt(6)

    # Formula 4: Zero-Data
    add_card(s9, Inches(6.833), Inches(4.2), fw, fh, "4. The Rigorous Zero-Data Standard", border_color=C_GREEN)
    tb = s9.shapes.add_textbox(Inches(7.033), Inches(4.8), fw - Inches(0.4), fh - Inches(0.7))
    tf = tb.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = "Eliminating the 'Ghost Green' 100% Deception"
    p.font.bold = True
    p.font.size = Pt(11)
    p.font.color.rgb = C_GREEN
    p2 = tf.add_paragraph()
    p2.text = "When matching records = 0 (or operating time = null):\n• availability = null  →  Rendered strictly as 'N/A'\n• closureRate = null  →  Rendered strictly as 'N/A'\n• mttr = null         →  Rendered strictly as 'N/A'\n• Speedometer needle rests at 0.0 baseline (Neutral Grey)."
    p2.font.size = Pt(9.5)
    p2.font.color.rgb = C_MUTED
    p2.space_before = Pt(6)

    set_speaker_notes(s9,
        "This slide contains the heart of our industrial telemetry engine. Emphasize Formula 1: 11,520 operating minutes per day. "
        "Explain why MTTR only counts completed incidents—including active tickets skews the average repair time. "
        "And defend the Zero-Data standard: if no logs exist for a weekend, outputting 100% uptime is misleading. We output N/A.")

    # =========================================================================
    # SLIDE 10: SECURITY ARCHITECTURE & RBAC
    # =========================================================================
    s10 = prs.slides.add_slide(blank_layout)
    set_slide_background(s10)
    add_header(s10, "Security Architecture, Authentication & Role-Based Access Control", "SECURITY & HARDENING")

    add_card(s10, Inches(0.8), Inches(1.5), Inches(7.5), Inches(5.2), "Server-Enforced Role-Based Access Matrix")

    # Table on Left
    table_shape = s10.shapes.add_table(8, 4, Inches(1.0), Inches(2.1), Inches(7.1), Inches(4.3))
    t = table_shape.table
    t.columns[0].width = Inches(2.6)
    t.columns[1].width = Inches(1.5)
    t.columns[2].width = Inches(1.5)
    t.columns[3].width = Inches(1.5)

    headers = ["System Capability", "Operator", "Supervisor", "Administrator"]
    for i, h in enumerate(headers):
        c = t.cell(0, i)
        c.fill.solid()
        c.fill.fore_color.rgb = C_CARD_BORDER
        p = c.text_frame.paragraphs[0]
        p.text = h
        p.font.size = Pt(9.5)
        p.font.bold = True
        p.font.color.rgb = C_WHITE

    rbac_rows = [
        ("View Dashboard & Telemetry", "PERMITTED", "PERMITTED", "PERMITTED"),
        ("View Incident Records Table", "PERMITTED", "PERMITTED", "PERMITTED"),
        ("Log New Incident Event", "PERMITTED", "PERMITTED", "PERMITTED"),
        ("Export Excel Dashboard", "PERMITTED", "PERMITTED", "PERMITTED"),
        ("Edit Incident Records", "BLOCKED (403)", "BLOCKED (403)", "PERMITTED"),
        ("Delete Incident Record", "BLOCKED (403)", "BLOCKED (403)", "PERMITTED"),
        ("Empty All Plant Logs", "BLOCKED (403)", "BLOCKED (403)", "PERMITTED*")
    ]
    for r_idx, (cap, op, sup, adm) in enumerate(rbac_rows, start=1):
        t.cell(r_idx, 0).text_frame.paragraphs[0].text = cap
        t.cell(r_idx, 0).text_frame.paragraphs[0].font.size = Pt(8.5)
        t.cell(r_idx, 0).text_frame.paragraphs[0].font.bold = True
        t.cell(r_idx, 0).text_frame.paragraphs[0].font.color.rgb = C_WHITE

        for c_idx, val in enumerate([op, sup, adm], start=1):
            cell = t.cell(r_idx, c_idx)
            p = cell.text_frame.paragraphs[0]
            p.text = val
            p.font.size = Pt(8.5)
            p.font.bold = True
            if "BLOCKED" in val:
                p.font.color.rgb = C_RED
            else:
                p.font.color.rgb = C_GREEN

    # Right Card: Hardening Highlights
    add_card(s10, Inches(8.6), Inches(1.5), Inches(3.933), Inches(5.2), "Key Security Defenses")
    tb = s10.shapes.add_textbox(Inches(8.8), Inches(2.1), Inches(3.533), Inches(4.3))
    tf = tb.text_frame
    tf.word_wrap = True
    tf.paragraphs[0].text = "Defense-in-Depth Mechanisms"
    tf.paragraphs[0].font.bold = True
    tf.paragraphs[0].font.size = Pt(11)
    tf.paragraphs[0].font.color.rgb = C_WHITE

    defenses = [
        ("HMAC-SHA256 Signed JWT", "Stateless tokens with 24-hour expiry. Role claims verified server-side on every request."),
        ("Token Bucket Rate Limiting", "Sliding window limits IP to 5 login attempts per minute, returning HTTP 429 on brute-force."),
        ("Formula Injection Defense", "All cell inputs in Excel export starting with '=', '+', '-', '@' are prepended with single quotes."),
        ("Two-Factor Clear All Guard", "Requires Admin JWT role PLUS typing explicit confirmation phrase 'PERMANENTLY DELETE ALL LOGS'.")
    ]
    for d_title, d_desc in defenses:
        p = tf.add_paragraph()
        p.text = f"• {d_title}: {d_desc}"
        p.font.size = Pt(8.5)
        p.font.color.rgb = C_MUTED
        p.space_before = Pt(8)

    set_speaker_notes(s10,
        "Here is our security architecture. Point out that client-side role hiding is NOT security. "
        "Every single protected API endpoint checks the cryptographic HMAC-SHA256 signature and role on the server. "
        "Also highlight our defense against Excel Formula Injection (sanitizing =, +, -, @) and the two-factor confirmation phrase for clearing logs.")

    # =========================================================================
    # SLIDE 11: USER INTERFACE & SHOP-FLOOR EXPERIENCE
    # =========================================================================
    s11 = prs.slides.add_slide(blank_layout)
    set_slide_background(s11)
    add_header(s11, "Frontend User Interface & Visual Experience Walkthrough", "UI / UX WALKTHROUGH")

    # 4 UI Screenshot Grid
    gw = Inches(5.7)
    gh = Inches(2.55)

    img_kpi = os.path.join(BASE_DIR, "Project_Screenshots", "02_dashboard_kpi.png")
    if os.path.exists(img_kpi):
        add_card(s11, Inches(0.8), Inches(1.4), gw, gh)
        s11.shapes.add_picture(img_kpi, Inches(0.9), Inches(1.5), width=gw - Inches(0.2), height=gh - Inches(0.2))

    img_charts = os.path.join(BASE_DIR, "Project_Screenshots", "03_analytics_charts.png")
    if os.path.exists(img_charts):
        add_card(s11, Inches(6.833), Inches(1.4), gw, gh)
        s11.shapes.add_picture(img_charts, Inches(6.933), Inches(1.5), width=gw - Inches(0.2), height=gh - Inches(0.2))

    img_form = os.path.join(BASE_DIR, "Project_Screenshots", "04_downtime_entry_form.png")
    if os.path.exists(img_form):
        add_card(s11, Inches(0.8), Inches(4.15), gw, gh)
        s11.shapes.add_picture(img_form, Inches(0.9), Inches(4.25), width=gw - Inches(0.2), height=gh - Inches(0.2))

    img_table = os.path.join(BASE_DIR, "Project_Screenshots", "05_incident_records_table.png")
    if os.path.exists(img_table):
        add_card(s11, Inches(6.833), Inches(4.15), gw, gh)
        s11.shapes.add_picture(img_table, Inches(6.933), Inches(4.25), width=gw - Inches(0.2), height=gh - Inches(0.2))

    set_speaker_notes(s11,
        "These are four verified screenshots from our live production deployment: "
        "Top-left: Executive KPI tiles and the Canvas 2D speedometer showing 99.87% availability. "
        "Top-right: Area-wise and process-wise availability charts alongside monthly trajectory. "
        "Bottom-left: The operator downtime logging form with mutex debouncing. "
        "Bottom-right: The tabular incident audit log with search, filters, and status tags.")

    # =========================================================================
    # SLIDE 12: DUAL-SHEET EXCEL DASHBOARD ENGINE
    # =========================================================================
    s12 = prs.slides.add_slide(blank_layout)
    set_slide_background(s12)
    add_header(s12, "Dual-Sheet Automated Excel Dashboard Reporting Engine", "REPORTING INNOVATION")

    add_card(s12, Inches(0.8), Inches(1.4), Inches(6.2), Inches(5.4), "Sheet 1: PLANT_DASHBOARD (Visual Executive Summary)")
    tb = s12.shapes.add_textbox(Inches(1.0), Inches(2.0), Inches(5.8), Inches(4.5))
    tf = tb.text_frame
    tf.word_wrap = True
    tf.paragraphs[0].text = "9 High-DPI Embedded Chart Drawings"
    tf.paragraphs[0].font.bold = True
    tf.paragraphs[0].font.size = Pt(11)
    tf.paragraphs[0].font.color.rgb = C_WHITE

    c_list = [
        "1. Calibrated Availability Speedometer (Needle Gauge)",
        "2. FY Monthly Availability Progress Bar",
        "3. Area-Wise Availability Horizontal Bar Chart",
        "4. Process-Wise Availability Column Chart",
        "5. Dual-Axis Equipment Downtime Trajectory",
        "6. Area-Wise Downtime Loss Breakdown Bar",
        "7. Process-Wise Downtime Loss Breakdown Bar",
        "8. Category Loss Share Doughnut / Pie Chart",
        "9. Category Loss Magnitude Comparison Column Chart"
    ]
    for c in c_list:
        p = tf.add_paragraph()
        p.text = f"• {c}"
        p.font.size = Pt(9)
        p.font.color.rgb = C_MUTED
        p.space_before = Pt(3)

    p_note = tf.add_paragraph()
    p_note.text = "Rendered in browser memory via ExcelJS 4.4.0 — Zero MS Office dependency."
    p_note.font.size = Pt(9.5)
    p_note.font.bold = True
    p_note.font.color.rgb = C_GREEN
    p_note.space_before = Pt(10)

    # Right Card: Sheet 2 & Screenshot
    add_card(s12, Inches(7.3), Inches(1.4), Inches(5.233), Inches(5.4), "Sheet 2: IT_DOWNTIME_LOG (Audit Data)")
    tb2 = s12.shapes.add_textbox(Inches(7.5), Inches(2.0), Inches(4.8), Inches(4.5))
    tf2 = tb2.text_frame
    tf2.word_wrap = True
    tf2.paragraphs[0].text = "Complete Sanitized Incident Records"
    tf2.paragraphs[0].font.bold = True
    tf2.paragraphs[0].font.size = Pt(11)
    tf2.paragraphs[0].font.color.rgb = C_WHITE

    s2_points = [
        "Chronological audit log matching active user filters.",
        "Includes Incident ID, Area, Process, Machine No, Downtime, Category, Action Plan, Responsible Person, and Status.",
        "Zebra-striped rows, styled headers, explicit column widths.",
        "Formula Injection Sanitization: Automatically neutralizes =, +, -, @ to prevent Excel RCE vulnerabilities."
    ]
    for pt in s2_points:
        p = tf2.add_paragraph()
        p.text = f"• {pt}"
        p.font.size = Pt(9)
        p.font.color.rgb = C_MUTED
        p.space_before = Pt(6)

    img_export = os.path.join(BASE_DIR, "Project_Screenshots", "07_export_modal.png")
    if os.path.exists(img_export):
        s12.shapes.add_picture(img_export, Inches(7.5), Inches(4.4), width=Inches(4.8), height=Inches(2.2))

    set_speaker_notes(s12,
        "Our dual-sheet Excel reporting engine is one of the most technically demanding features of the project. "
        "Instead of generating plain CSVs, our engine draws 9 high-resolution charts off-screen, encodes them to PNG, and embeds them "
        "into the PLANT_DASHBOARD worksheet. Sheet 2 contains the sanitized chronological log with formula injection protection.")

    # =========================================================================
    # SLIDE 13: VERIFICATION STRATEGY & TEST SUITES
    # =========================================================================
    s13 = prs.slides.add_slide(blank_layout)
    set_slide_background(s13)
    add_header(s13, "Verification Strategy, Testing & Quality Assurance", "QUALITY ASSURANCE")

    add_card(s13, Inches(0.8), Inches(1.4), Inches(11.733), Inches(5.4), "5 Automated Test Suites — 59 Assertions Passing 100%")

    t_shape = s13.shapes.add_table(6, 4, Inches(1.0), Inches(2.1), Inches(11.133), Inches(4.3))
    table = t_shape.table
    table.columns[0].width = Inches(3.2)
    table.columns[1].width = Inches(1.4)
    table.columns[2].width = Inches(5.0)
    table.columns[3].width = Inches(1.533)

    t_headers = ["Test Suite & File Path", "Assertions", "Key Boundary Scenarios Verified", "Result"]
    for i, h in enumerate(t_headers):
        c = table.cell(0, i)
        c.fill.solid()
        c.fill.fore_color.rgb = C_CARD_BORDER
        p = c.text_frame.paragraphs[0]
        p.text = h
        p.font.size = Pt(10)
        p.font.bold = True
        p.font.color.rgb = C_WHITE

    suite_data = [
        ("Suite 1: Automated Regression\ntests/run_tests.js", "16 / 16", "Zero-incident N/A state, 100% uptime with operating time, MTTR math, status rejection, duplicate entry blocking.", "100% PASS"),
        ("Suite 2: Official Acceptance\ntests/run_acceptance_tests.js", "10 / 10", "Tests A-J: Mutex debouncing (5 rapid clicks produce 1 row), session persistence, production unauth 401.", "100% PASS"),
        ("Suite 3: 18-Point Regression\ntests/verify_18_regressions.js", "18 / 18", "Empty dataset N/A, debounce locks, direct protected API 401, non-admin 403, zero UTC drift across midnight.", "100% PASS"),
        ("Suite 4: User Compliance\ntests/verify_user_5_requests.js", "5 / 5", "Attribution badge check, admin-only restrictions on edit/delete, category aggregation, 2-sheet Excel validation.", "100% PASS"),
        ("Suite 5: Excel Export Engine\ntests/test_excel_dashboard_export.js", "10 / 10", "Dual worksheets PLANT_DASHBOARD & IT_DOWNTIME_LOG, 9 embedded chart images, formula sanitization.", "100% PASS")
    ]
    for r_idx, (name, count, desc, res) in enumerate(suite_data, start=1):
        table.cell(r_idx, 0).text_frame.paragraphs[0].text = name
        table.cell(r_idx, 0).text_frame.paragraphs[0].font.size = Pt(8.5)
        table.cell(r_idx, 0).text_frame.paragraphs[0].font.bold = True
        table.cell(r_idx, 0).text_frame.paragraphs[0].font.color.rgb = C_WHITE

        table.cell(r_idx, 1).text_frame.paragraphs[0].text = count
        table.cell(r_idx, 1).text_frame.paragraphs[0].font.size = Pt(9)
        table.cell(r_idx, 1).text_frame.paragraphs[0].font.color.rgb = C_BLUE

        table.cell(r_idx, 2).text_frame.paragraphs[0].text = desc
        table.cell(r_idx, 2).text_frame.paragraphs[0].font.size = Pt(8.5)
        table.cell(r_idx, 2).text_frame.paragraphs[0].font.color.rgb = C_MUTED

        cell_res = table.cell(r_idx, 3)
        cell_res.text_frame.paragraphs[0].text = res
        cell_res.text_frame.paragraphs[0].font.size = Pt(9.5)
        cell_res.text_frame.paragraphs[0].font.bold = True
        cell_res.text_frame.paragraphs[0].font.color.rgb = C_GREEN

    set_speaker_notes(s13,
        "Quality assurance was not an afterthought. We wrote 5 automated test suites spanning 59 assertions. "
        "Every test suite is automated in Node.js and verified. This covers regression tests, official acceptance tests, "
        "the 18-point regression matrix, user compliance checks, and the Excel export validation.")

    # =========================================================================
    # SLIDE 14: VIVA VOCE CORE TECHNICAL DEFENSE Q&A
    # =========================================================================
    s14 = prs.slides.add_slide(blank_layout)
    set_slide_background(s14)
    add_header(s14, "Viva Voce Technical Evaluation & Oral Defense Q&A", "TECHNICAL DEFENSE")

    # 4 Cards for 4 Key Questions
    qw = Inches(5.7)
    qh = Inches(2.55)

    # Q1
    add_card(s14, Inches(0.8), Inches(1.4), qw, qh, "Q1: Why Serverless Edge over Monolith?")
    tb = s14.shapes.add_textbox(Inches(1.0), Inches(2.0), qw - Inches(0.4), qh - Inches(0.7))
    tf = tb.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = "Defense: Industrial plants require zero local server maintenance overhead. A traditional monolith demands dedicated VMs, continuous OS patches, and manual scaling. Deploying on Vercel Edge (`iad1`) autoscales from zero to thousands of calls, terminates SSL at the edge, and achieves sub-30ms DB latency at zero idle server cost."
    p.font.size = Pt(8.5)
    p.font.color.rgb = C_MUTED

    # Q2
    add_card(s14, Inches(6.833), Inches(1.4), qw, qh, "Q2: Multi-Area Availability Math?")
    tb = s14.shapes.add_textbox(Inches(7.033), Inches(2.0), qw - Inches(0.4), qh - Inches(0.7))
    tf = tb.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = "Defense: Standard availability (Uptime / Total) fails because 8 distinct plant areas run simultaneously. Our engine evaluates plant capacity as Days × 24 × 60 × 8 Areas (11,520 min/day). Furthermore, machine multipliers scale downtime when multiple assets stop, guaranteeing accurate capacity loss quantification."
    p.font.size = Pt(8.5)
    p.font.color.rgb = C_MUTED

    # Q3
    add_card(s14, Inches(0.8), Inches(4.15), qw, qh, "Q3: Why is the Zero-Data Standard Crucial?")
    tb = s14.shapes.add_textbox(Inches(1.0), Inches(4.75), qw - Inches(0.4), qh - Inches(0.7))
    tf = tb.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = "Defense: Legacy spreadsheets output 100.00% uptime when zero rows exist. In continuous tire manufacturing, zero logged events often means an unlogged shift or disconnected gateway. Displaying false 100% uptime gives plant executives dangerous false assurance. Our system strictly outputs 'N/A' whenever operating time or data is missing."
    p.font.size = Pt(8.5)
    p.font.color.rgb = C_MUTED

    # Q4
    add_card(s14, Inches(6.833), Inches(4.15), qw, qh, "Q4: How do you prevent Formula Injection?")
    tb = s14.shapes.add_textbox(Inches(7.033), Inches(4.75), qw - Inches(0.4), qh - Inches(0.7))
    tf = tb.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = "Defense: User-entered issue details could contain malicious Excel payloads like `=cmd|'/C calc'!A0`. Opening that workbook on an executive laptop executes arbitrary code. Our export engine inspects every cell string; if the first character matches '=', '+', '-', or '@', it prepends a single quote ('), forcing Excel to treat it purely as literal text."
    p.font.size = Pt(8.5)
    p.font.color.rgb = C_MUTED

    set_speaker_notes(s14,
        "These four questions represent the most critical technical defense points during an engineering viva voce. "
        "Be ready to explain why Serverless Edge was chosen, how the 8-area capacity formula works, why 100% false green uptime was eliminated, "
        "and how spreadsheet formula injection attacks are neutralized before export.")

    # =========================================================================
    # SLIDE 15: FUTURE ROADMAP & ENGINEERING CONCLUSION
    # =========================================================================
    s15 = prs.slides.add_slide(blank_layout)
    set_slide_background(s15)
    add_header(s15, "Future Engineering Roadmap & Project Conclusion", "SUMMARY & OUTLOOK")

    # Left: Roadmap
    add_card(s15, Inches(0.8), Inches(1.4), Inches(5.7), Inches(5.4), "Future Engineering Roadmap")
    tb = s15.shapes.add_textbox(Inches(1.0), Inches(2.0), Inches(5.3), Inches(4.5))
    tf = tb.text_frame
    tf.word_wrap = True
    tf.paragraphs[0].text = "Phase 2 & IoT Integration"
    tf.paragraphs[0].font.bold = True
    tf.paragraphs[0].font.size = Pt(11)
    tf.paragraphs[0].font.color.rgb = C_WHITE

    roadmap = [
        ("Predictive ML Maintenance", "Train time-series models (ARIMA/LSTM) on downtime frequency to alert teams before equipment failure."),
        ("Direct Shop-Floor PLC Telemetry", "Deploy MQTT / OPC-UA gateway connectors to auto-log incidents the second a PLC triggers an alarm."),
        ("Automated Supervisor Escalation", "Webhook integration for instant SMS / WhatsApp / Teams alerts when downtime exceeds 15 minutes."),
        ("Multi-Plant Federation", "Multi-tenant plant schemas allowing corporate HQ to benchmark uptime across international factories.")
    ]
    for r_title, r_desc in roadmap:
        p = tf.add_paragraph()
        p.text = f"• {r_title}: {r_desc}"
        p.font.size = Pt(9)
        p.font.color.rgb = C_MUTED
        p.space_before = Pt(8)

    # Right: Conclusion & Authors
    add_card(s15, Inches(6.833), Inches(1.4), Inches(5.7), Inches(5.4), "Engineering Conclusion", border_color=C_RED)
    tb2 = s15.shapes.add_textbox(Inches(7.033), Inches(2.0), Inches(5.3), Inches(4.5))
    tf2 = tb2.text_frame
    tf2.word_wrap = True
    tf2.paragraphs[0].text = "Production-Ready MES Telemetry"
    tf2.paragraphs[0].font.bold = True
    tf2.paragraphs[0].font.size = Pt(12)
    tf2.paragraphs[0].font.color.rgb = C_GREEN

    p = tf2.add_paragraph()
    p.text = "The Plant IT Downtime Management & Analytics System delivers an enterprise-grade, secure, and mathematically sound operational platform for continuous manufacturing facilities."
    p.font.size = Pt(9.5)
    p.font.color.rgb = C_WHITE
    p.space_before = Pt(8)

    p2 = tf2.add_paragraph()
    p2.text = "Key Project Achievements:\n✓ 100% verified elimination of false-green ghost metrics\n✓ Server-enforced cryptographic JWT RBAC\n✓ Sub-15s shop-floor incident logging with mutex debounce\n✓ Dual-sheet automated Excel report engine with 9 charts\n✓ 59/59 Automated test assertions passing (100%)\n✓ Live production deployment at plant-it-downtime.vercel.app"
    p2.font.size = Pt(9)
    p2.font.color.rgb = C_MUTED
    p2.space_before = Pt(8)

    p3 = tf2.add_paragraph()
    p3.text = "Developed by Hadssha Bell S & Reuben Geoffrey\nOctober 2026 — Engineering Capstone Defense"
    p3.font.name = "Arial"
    p3.font.size = Pt(11)
    p3.font.bold = True
    p3.font.color.rgb = C_RED
    p3.space_before = Pt(12)

    set_speaker_notes(s15,
        "In conclusion, the Plant IT Downtime Management & Analytics System demonstrates how modern full-stack web engineering, "
        "cloud-edge infrastructure, and mathematical rigor can eliminate legacy manufacturing blindspots. "
        "We thank our evaluators and invite questions on our architecture, mathematical telemetry, or security implementations.")

    # Save presentation
    output_path = os.path.join(BASE_DIR, "Project_Presentation.pptx")
    prs.save(output_path)
    print(f"[SUCCESS] Presentation generated successfully: {output_path}")

if __name__ == '__main__':
    build_presentation()
