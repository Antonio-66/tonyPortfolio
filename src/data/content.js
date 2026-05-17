export const content = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      skills: 'Habilidades',
      projects: 'Proyectos',
      experience: 'Experiencia',
      contact: 'Contacto'
    },
    hero: {
      headline: 'QA Automation Engineer — De la validación funcional crítica a la automatización con Playwright y TypeScript',
      sub: 'Automatización con criterio de negocio. Calidad validada en sistemas críticos.',
      ctaProjects: 'Ver proyectos',
      ctaContact: 'Contactar'
    },
    about: {
      title: 'Sobre mí',
      bio: 'QA con base sólida en validación de sistemas críticos en entornos bancarios y de payroll. He validado flujos de compensación de pagos, cálculos de nómina y operaciones en mainframes. Actualmente evoluciono hacia la automatización con Playwright y TypeScript, aplicando el mismo criterio funcional que usé en testing manual para decidir qué automatizar y cómo.',
      bullets: [
        'Validación manual de sistemas de pagos y payroll antes de escribir la primera línea de código de test',
        'Experiencia validando integridad de datos entre canales web/mobile y sistemas legacy (AS400, DB2, PostgreSQL)',
        'Enfoque en automatización que resuelve problemas de negocio reales, no solo suites que corren en CI'
      ],
      badge: 'Evolucionando a QA Automation Engineer'
    },
    skills: {
      title: 'Habilidades',
      categories: {
        automation: 'Automatización',
        api: 'Testing de APIs',
        performance: 'Performance',
        databases: 'Bases de Datos',
        cicd: 'CI/CD',
        qaCore: 'QA Core'
      },
      levels: {
        advanced: 'Avanzado',
        intermediate: 'Intermedio'
      },
      items: {
        playwright: 'Playwright',
        selenium: 'Selenium',
        appium: 'Appium',
        postman: 'Postman',
        newman: 'Newman',
        artillery: 'Artillery',
        db2: 'DB2',
        mysql: 'MySQL',
        postgresql: 'PostgreSQL',
        jenkins: 'Jenkins',
        git: 'Git',
        functionalTesting: 'Testing Funcional',
        regressionTesting: 'Testing de Regresión',
        testPlanning: 'Planificación de Tests',
        javascript: 'JavaScript',
        typescript: 'TypeScript',
        java: 'Java'
      }
    },
    projects: {
      title: 'Proyectos',
      viewOnGithub: 'Ver en GitHub',
      status: {
        active: 'Activo',
        completed: 'Completado',
        inProgress: 'En progreso'
      },
      items: [
        {
          id: 1,
          title: 'Automatización de Payroll con Playwright',
          description: 'Diseño e implementación de suite de regresión end-to-end para sistema de payroll corporativo. El sistema maneja cálculos salariales complejos con múltiples deducciones, beneficios y regulaciones laborales. La suite cubre flujos críticos de empleados, generación de reportes y validación de cálculos contra base de datos.',
          context: 'Sistema de payroll corporativo con alta criticidad — errores en cálculos impactan directamente en el pago de salarios.',
          testingType: 'E2E, Regresión, Validación de datos',
          value: 'Cobertura automatizada de flujos críticos que antes requerían validación manual completa en cada release.',
          stack: ['Playwright', 'TypeScript', 'Postman', 'Newman', 'Artillery', 'Jira'],
          link: '#',
          status: 'active'
        },
        {
          id: 2,
          title: 'Validación de Sistemas de Pagos — Bancard',
          description: 'Testing integral de plataforma de pagos electrónicos: automatización mobile con Appium para app Android de pagos, pruebas web con Selenium para backoffice de comercios, y validación de datos en AS400, DB2 y PostgreSQL. Validación de flujos de compensación, conciliación y reporting.',
          context: 'Entorno bancario con procesamiento de transacciones de alto volumen y requisitos de integridad de datos estrictos.',
          testingType: 'Mobile, Integración, Validación de BD, Funcional',
          value: 'Detección temprana de inconsistencias entre canales digitales y sistemas legacy (AS400), previniendo errores en compensación.',
          stack: ['Appium', 'Selenium', 'AS400', 'DB2', 'PostgreSQL', 'Jira'],
          link: '#',
          status: 'completed'
        },
        {
          id: 3,
          title: 'QA para Sistemas Financieros — Bepsa',
          description: 'Ejecución de pruebas funcionales, de aceptación y regresión para sistemas financieros en releases semanales. Automatización de casos críticos con Selenium y validación de APIs REST con Postman. Pruebas exploratorias para identificar riesgos en nuevas funcionalidades antes de llegar a producción.',
          context: 'Empresa financiera con releases ágiles y alta exigencia de estabilidad en producción.',
          testingType: 'Funcional, Regresión, Exploratoria, API',
          value: 'Estabilidad en releases semanales mediante regresión automatizada y criterios de aceptación claros antes de cada deploy.',
          stack: ['Selenium', 'Postman', 'Jira'],
          link: '#',
          status: 'completed'
        }
      ]
    },
    sampleTestCases: {
      title: 'Casos de Prueba de Ejemplo',
      badge: 'Documentación profesional',
      cases: [
        {
          id: 'TC-PAY-001',
          title: 'Cálculo de salario neto con deducciones múltiples — Payroll',
          module: 'Payroll - Cálculo Salarial',
          priority: 'Alta',
          description: 'Validar que el sistema calcula correctamente el salario neto aplicando deducciones de impuestos, contribuciones sociales y beneficios opcionales, y que el resultado se refleja consistentemente en la UI y en la tabla de nómina (PostgreSQL).',
          preconditions: [
            'Empleado activo con contrato full-time y deducciones configuradas',
            'Período de pago abierto y sin procesar',
            'Conexión a base de datos de nómina disponible'
          ],
          steps: [
            'Autenticarse en el sistema de payroll con rol Administrador',
            'Navegar al módulo de procesamiento de nómina',
            'Seleccionar el período de pago activo',
            'Seleccionar empleado de prueba y verificar datos base cargados',
            'Ejecutar el proceso de cálculo de nómina',
            'Capturar el salario neto mostrado en pantalla',
            'Ejecutar query en PostgreSQL para verificar el valor almacenado en tabla PAYROLL_DETAIL'
          ],
          testData: {
            empleadoId: 'EMP-TEST-001',
            salarioBase: '4.500.000 Gs',
            horasTrabajadas: '160',
            impuestoRenta: '10%',
            aporteJubilatorio: '9%',
            seguroSalud: '3%',
            beneficioOpcional: '150.000 Gs',
            salarioNetoEsperado: '3.495.000 Gs'
          },
          expectedResult: 'El salario neto mostrado en UI debe ser 3.495.000 Gs. El query a PostgreSQL debe retornar el mismo valor en el campo NET_SALARY. No deben existir discrepancias entre interfaz y base de datos.'
        },
        {
          id: 'TC-BNK-002',
          title: 'Compensación de transacción y validación en AS400 — Pagos',
          module: 'Pagos - Compensación y Conciliación',
          priority: 'Alta',
          description: 'Verificar que una transacción de pago aprobada desde la app mobile se compensa correctamente en el sistema core (AS400) y que los estados de transacción son consistentes entre el canal mobile, la base PostgreSQL de transacciones y el registro en DB2 del procesador.',
          preconditions: [
            'App mobile instalada y autenticada con usuario de prueba',
            'Tarjeta de crédito con saldo disponible superior al monto de prueba',
            'Conexión operativa con procesador de pagos y AS400',
            'Query de validación en DB2 preparada para verificar estado de compensación'
          ],
          steps: [
            'Iniciar sesión en app mobile con credenciales de prueba',
            'Seleccionar opción "Pagar" e ingresar monto: 350.000 Gs',
            'Seleccionar tarjeta de crédito como método de pago',
            'Confirmar transacción e ingresar CVV',
            'Capturar número de autorización y código de respuesta mostrado',
            'Esperar notificación de confirmación (máx 60 segundos)',
            'Ejecutar query en PostgreSQL para verificar estado en tabla TRANSACTIONS',
            'Ejecutar query en DB2 del procesador para verificar estado de compensación'
          ],
          testData: {
            monto: '350.000 Gs',
            tarjeta: 'Visa terminada en 4242',
            comercioId: 'MERCH-TEST-01',
            codigoAprobacionEsperado: '00',
            estadoEsperadoPostgreSQL: 'COMPENSATED',
            estadoEsperadoDB2: 'SETTLED'
          },
          expectedResult: 'Código de respuesta: 00 (Aprobado). En PostgreSQL: estado COMPENSATED dentro de 30 segundos. En DB2: estado SETTLED con mismo authorization_code. La transacción no debe quedar en estado PENDING ni FAILED.'
        }
      ]
    },
    tools: {
      title: 'Herramientas',
      categories: {
        automation: 'Automatización',
        api: 'API Testing',
        performance: 'Performance',
        database: 'Bases de Datos',
        cicd: 'CI/CD',
        management: 'Gestión',
        languages: 'Lenguajes'
      },
      items: [
        { name: 'Playwright', category: 'automation' },
        { name: 'Selenium', category: 'automation' },
        { name: 'Appium', category: 'automation' },
        { name: 'Postman', category: 'api' },
        { name: 'Newman', category: 'api' },
        { name: 'Artillery', category: 'performance' },
        { name: 'DB2', category: 'database' },
        { name: 'MySQL', category: 'database' },
        { name: 'PostgreSQL', category: 'database' },
        { name: 'Jenkins', category: 'cicd' },
        { name: 'Git', category: 'cicd' },
        { name: 'Jira', category: 'management' },
        { name: 'JavaScript', category: 'languages' },
        { name: 'TypeScript', category: 'languages' },
        { name: 'Java', category: 'languages' }
      ]
    },
    experience: {
      title: 'Experiencia',
      items: [
        {
          company: 'ITTI',
          role: 'QA Analyst — Payroll & Automation',
          period: '2023 - Presente',
          context: 'Empresa de tecnología con foco en soluciones de payroll corporativo para clientes de gran escala.',
          responsibilities: [
            'Diseño y ejecución de pruebas funcionales y de regresión en sistema de payroll con cálculos salariales complejos',
            'Desarrollo de suite de automatización E2E con Playwright y TypeScript, enfocada en flujos críticos de empleados y reportes',
            'Testing de APIs REST usando Postman y Newman, integrado en pipeline de CI para validación automática en cada build',
            'Pruebas de carga con Artillery para identificar cuellos de botella en generación de reportes y procesamiento de nómina',
            'Gestión de ciclo de defectos en Jira, trazabilidad de requerimientos y reporting de calidad para stakeholders'
          ]
        },
        {
          company: 'Bancard',
          role: 'QA Analyst — Payments & Mobile',
          period: '2021 - 2023',
          context: 'Procesador de pagos electrónicos con operación crítica 24/7, integrando canales digitales con sistemas legacy bancarios.',
          responsibilities: [
            'Validación funcional e integración de sistemas de pagos electrónicos, incluyendo flujos de compensación y conciliación',
            'Automatización de pruebas mobile para aplicación Android de pagos usando Appium, cubriendo autenticación, transacciones y notificaciones',
            'Automatización web con Selenium WebDriver para backoffice de comercios y herramientas internas de operación',
            'Validación de integridad de datos entre aplicaciones web/mobile y sistemas AS400, DB2 y PostgreSQL',
            'Testing de integración con procesadores de pago externos, validando códigos de respuesta, estados de transacción y reversos'
          ]
        },
        {
          company: 'Bepsa',
          role: 'QA Tester — Financial Systems',
          period: '2019 - 2021',
          context: 'Institución financiera con releases semanales y alta criticidad en la estabilidad de sistemas de core banking.',
          responsibilities: [
            'Ejecución de pruebas funcionales, de aceptación de usuario y regresión para sistemas financieros críticos',
            'Pruebas exploratorias en nuevas funcionalidades para identificar riesgos antes de la etapa de regresión',
            'Automatización de casos de regresión con Selenium, reduciendo tiempo de validación en releases recurrentes',
            'Testing de APIs REST con Postman para validación de servicios backend y flujos de integración',
            'Documentación de resultados, trazabilidad de casos de prueba y gestión de evidencias en Jira para auditoría'
          ]
        }
      ]
    },
    contact: {
      title: 'Contacto',
      subtitle: 'Disponible para roles de QA Automation en entornos corporativos.',
      email: 'antoniotrinidad66@gmail.com',
      linkedin: 'https://www.linkedin.com/in/antonio-trinidad-6b16891a2',
      github: 'https://github.com/Antonio-66',
      message: '¿Te interesa mi perfil? Escribime y conversamos.'
    },
    footer: {
      rights: 'Todos los derechos reservados.',
      madeWith: 'Construido con React + CSS puro'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact'
    },
    hero: {
      headline: 'QA Automation Engineer — From Critical Functional Validation to Automated Testing with Playwright & TypeScript',
      sub: 'Automation with business judgment. Quality validated in critical systems.',
      ctaProjects: 'View Projects',
      ctaContact: 'Contact'
    },
    about: {
      title: 'About Me',
      bio: 'QA with a solid foundation in critical systems validation across banking and payroll environments. I have validated payment settlement flows, payroll calculations, and mainframe operations. Currently evolving into automation with Playwright and TypeScript, applying the same functional judgment I used in manual testing to decide what and how to automate.',
      bullets: [
        'Manual validation of payment and payroll systems before writing the first line of test code',
        'Experience validating data integrity between web/mobile channels and legacy systems (AS400, DB2, PostgreSQL)',
        'Focus on automation that solves real business problems, not just suites that run in CI'
      ],
      badge: 'Evolving to QA Automation Engineer'
    },
    skills: {
      title: 'Skills',
      categories: {
        automation: 'Automation',
        api: 'API Testing',
        performance: 'Performance',
        databases: 'Databases',
        cicd: 'CI/CD',
        qaCore: 'QA Core'
      },
      levels: {
        advanced: 'Advanced',
        intermediate: 'Intermediate'
      },
      items: {
        playwright: 'Playwright',
        selenium: 'Selenium',
        appium: 'Appium',
        postman: 'Postman',
        newman: 'Newman',
        artillery: 'Artillery',
        db2: 'DB2',
        mysql: 'MySQL',
        postgresql: 'PostgreSQL',
        jenkins: 'Jenkins',
        git: 'Git',
        functionalTesting: 'Functional Testing',
        regressionTesting: 'Regression Testing',
        testPlanning: 'Test Planning',
        javascript: 'JavaScript',
        typescript: 'TypeScript',
        java: 'Java'
      }
    },
    projects: {
      title: 'Projects',
      viewOnGithub: 'View on GitHub',
      status: {
        active: 'Active',
        completed: 'Completed',
        inProgress: 'In progress'
      },
      items: [
        {
          id: 1,
          title: 'Payroll Automation with Playwright',
          description: 'Designed and implemented an end-to-end regression suite for a corporate payroll system. The system handles complex salary calculations with multiple deductions, benefits, and labor regulations. The suite covers critical employee flows, report generation, and calculation validation against the database.',
          context: 'Corporate payroll system with high criticality — calculation errors directly impact salary payments.',
          testingType: 'E2E, Regression, Data Validation',
          value: 'Automated coverage of critical flows that previously required full manual validation on every release.',
          stack: ['Playwright', 'TypeScript', 'Postman', 'Newman', 'Artillery', 'Jira'],
          link: '#',
          status: 'active'
        },
        {
          id: 2,
          title: 'Payment Systems Validation — Bancard',
          description: 'Comprehensive testing of an electronic payments platform: mobile automation with Appium for Android payment app, web testing with Selenium for merchant backoffice, and data validation across AS400, DB2, and PostgreSQL. Validation of settlement, reconciliation, and reporting flows.',
          context: 'Banking environment with high-volume transaction processing and strict data integrity requirements.',
          testingType: 'Mobile, Integration, DB Validation, Functional',
          value: 'Early detection of inconsistencies between digital channels and legacy systems (AS400), preventing settlement errors.',
          stack: ['Appium', 'Selenium', 'AS400', 'DB2', 'PostgreSQL', 'Jira'],
          link: '#',
          status: 'completed'
        },
        {
          id: 3,
          title: 'QA for Financial Systems — Bepsa',
          description: 'Execution of functional, acceptance, and regression testing for financial systems on weekly releases. Automation of critical cases with Selenium and REST API validation with Postman. Exploratory testing to identify risks in new features before they reached production.',
          context: 'Financial institution with agile releases and high demand for production stability.',
          testingType: 'Functional, Regression, Exploratory, API',
          value: 'Release stability through automated regression and clear acceptance criteria before every deploy.',
          stack: ['Selenium', 'Postman', 'Jira'],
          link: '#',
          status: 'completed'
        }
      ]
    },
    sampleTestCases: {
      title: 'Sample Test Cases',
      badge: 'Professional Documentation',
      cases: [
        {
          id: 'TC-PAY-001',
          title: 'Net salary calculation with multiple deductions — Payroll',
          module: 'Payroll - Salary Calculation',
          priority: 'High',
          description: 'Validate that the system correctly calculates net salary applying tax deductions, social contributions, and optional benefits, and that the result is consistently reflected in the UI and in the payroll table (PostgreSQL).',
          preconditions: [
            'Active employee with full-time contract and deductions configured',
            'Pay period open and unprocessed',
            'Connection to payroll database available'
          ],
          steps: [
            'Log into the payroll system with Administrator role',
            'Navigate to the payroll processing module',
            'Select the active pay period',
            'Select test employee and verify base data is loaded',
            'Run the payroll calculation process',
            'Capture the net salary displayed on screen',
            'Execute query in PostgreSQL to verify the stored value in PAYROLL_DETAIL table'
          ],
          testData: {
            empleadoId: 'EMP-TEST-001',
            salarioBase: '4,500,000 Gs',
            horasTrabajadas: '160',
            impuestoRenta: '10%',
            aporteJubilatorio: '9%',
            seguroSalud: '3%',
            beneficioOpcional: '150,000 Gs',
            salarioNetoEsperado: '3,495,000 Gs'
          },
          expectedResult: 'Net salary displayed in UI must be 3,495,000 Gs. The PostgreSQL query must return the same value in the NET_SALARY field. No discrepancies must exist between interface and database.'
        },
        {
          id: 'TC-BNK-002',
          title: 'Transaction settlement and AS400 validation — Payments',
          module: 'Payments - Settlement and Reconciliation',
          priority: 'High',
          description: 'Verify that an approved payment transaction from the mobile app is correctly settled in the core system (AS400) and that transaction states are consistent across the mobile channel, the PostgreSQL transaction database, and the DB2 processor record.',
          preconditions: [
            'Mobile app installed and authenticated with test user',
            'Credit card with available balance higher than the test amount',
            'Operational connection with payment processor and AS400',
            'Validation query in DB2 prepared to verify settlement status'
          ],
          steps: [
            'Log into mobile app with test credentials',
            'Select "Pay" option and enter amount: 350,000 Gs',
            'Select credit card as payment method',
            'Confirm transaction and enter CVV',
            'Capture authorization number and response code displayed',
            'Wait for confirmation notification (max 60 seconds)',
            'Execute query in PostgreSQL to verify status in TRANSACTIONS table',
            'Execute query in DB2 processor to verify settlement status'
          ],
          testData: {
            monto: '350,000 Gs',
            tarjeta: 'Visa ending in 4242',
            comercioId: 'MERCH-TEST-01',
            codigoAprobacionEsperado: '00',
            estadoEsperadoPostgreSQL: 'COMPENSATED',
            estadoEsperadoDB2: 'SETTLED'
          },
          expectedResult: 'Response code: 00 (Approved). In PostgreSQL: status COMPENSATED within 30 seconds. In DB2: status SETTLED with same authorization_code. The transaction must not remain in PENDING or FAILED status.'
        }
      ]
    },
    tools: {
      title: 'Tools',
      categories: {
        automation: 'Automation',
        api: 'API Testing',
        performance: 'Performance',
        database: 'Databases',
        cicd: 'CI/CD',
        management: 'Management',
        languages: 'Languages'
      },
      items: [
        { name: 'Playwright', category: 'automation' },
        { name: 'Selenium', category: 'automation' },
        { name: 'Appium', category: 'automation' },
        { name: 'Postman', category: 'api' },
        { name: 'Newman', category: 'api' },
        { name: 'Artillery', category: 'performance' },
        { name: 'DB2', category: 'database' },
        { name: 'MySQL', category: 'database' },
        { name: 'PostgreSQL', category: 'database' },
        { name: 'Jenkins', category: 'cicd' },
        { name: 'Git', category: 'cicd' },
        { name: 'Jira', category: 'management' },
        { name: 'JavaScript', category: 'languages' },
        { name: 'TypeScript', category: 'languages' },
        { name: 'Java', category: 'languages' }
      ]
    },
    experience: {
      title: 'Experience',
      items: [
        {
          company: 'ITTI',
          role: 'QA Analyst — Payroll & Automation',
          period: '2023 - Present',
          context: 'Technology company focused on corporate payroll solutions for large-scale clients.',
          responsibilities: [
            'Designed and executed functional and regression testing on a payroll system with complex salary calculations',
            'Developed an E2E automation suite with Playwright and TypeScript, focused on critical employee flows and reports',
            'REST API testing using Postman and Newman, integrated in CI pipeline for automatic validation on every build',
            'Load testing with Artillery to identify bottlenecks in report generation and payroll processing',
            'Defect lifecycle management in Jira, requirements traceability, and quality reporting for stakeholders'
          ]
        },
        {
          company: 'Bancard',
          role: 'QA Analyst — Payments & Mobile',
          period: '2021 - 2023',
          context: 'Electronic payment processor with critical 24/7 operation, integrating digital channels with legacy banking systems.',
          responsibilities: [
            'Functional and integration validation of electronic payment systems, including settlement and reconciliation flows',
            'Mobile test automation for Android payment app using Appium, covering authentication, transactions, and notifications',
            'Web automation with Selenium WebDriver for merchant backoffice and internal operation tools',
            'Data integrity validation between web/mobile applications and AS400, DB2, and PostgreSQL systems',
            'Integration testing with external payment processors, validating response codes, transaction states, and reversals'
          ]
        },
        {
          company: 'Bepsa',
          role: 'QA Tester — Financial Systems',
          period: '2019 - 2021',
          context: 'Financial institution with weekly releases and high criticality in core banking system stability.',
          responsibilities: [
            'Executed functional, user acceptance, and regression testing for critical financial systems',
            'Exploratory testing on new features to identify risks before the regression stage',
            'Regression case automation with Selenium, reducing validation time on recurring releases',
            'REST API testing with Postman for backend service validation and integration flow testing',
            'Results documentation, test case traceability, and evidence management in Jira for audit purposes'
          ]
        }
      ]
    },
    contact: {
      title: 'Contact',
      subtitle: 'Available for QA Automation roles in corporate environments.',
      email: 'antoniotrinidad66@gmail.com',
      linkedin: 'https://www.linkedin.com/in/antonio-trinidad-6b16891a2',
      github: 'https://github.com/Antonio-66',
      message: 'Interested in my profile? Reach out and let\'s talk.'
    },
    footer: {
      rights: 'All rights reserved.',
      madeWith: 'Built with React + pure CSS'
    }
  }
};