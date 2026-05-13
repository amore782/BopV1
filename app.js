
// ============================================
// ENAFOR - Saisie Temps Réel Interphases BOP
// Static Data & Application Logic
// ============================================

// ===== البيانات الثابتة (Static Data) =====
const STATIC_DATA = {
    // الحفارات
    rigs: [
        { id: 'ENF#06', name: 'ENF#06', location: 'Hassi Messaoud', status: 'active' },
        { id: 'ENF#07', name: 'ENF#07', location: 'Hassi Messaoud', status: 'active' },
        { id: 'ENF#08', name: 'ENF#08', location: 'Rhourde Nouss', status: 'maintenance' },
        { id: 'ENF#09', name: 'ENF#09', location: 'Tin Fouye', status: 'active' },
        { id: 'ENF#10', name: 'ENF#10', location: 'Berkine', status: 'active' }
    ],

    // كبار المشرفين
    toolPushers: [
        { id: 'STP-001', name: 'Senior Tool Pusher', badge: 'STP-001', level: 'Senior' },
        { id: 'STP-002', name: 'Ahmed Benali', badge: 'STP-002', level: 'Senior' },
        { id: 'STP-003', name: 'Mohamed Kader', badge: 'STP-003', level: 'Senior' },
        { id: 'STP-004', name: 'Karim Hadj', badge: 'STP-004', level: 'Junior' },
        { id: 'STP-005', name: 'Rachid Amara', badge: 'STP-005', level: 'Senior' }
    ],

    // المراحل الانتقالية والعمليات
    interphases: [
        {
            id: 1,
            range: '36"-26"',
            operations: [
                {
                    title: 'Welding of 30" guide tube and Nipple up of Bell Nipple',
                    steps: [
                        'Prepare 30" guide tube for welding',
                        'Weld guide tube to conductor pipe',
                        'Install Bell Nipple assembly',
                        'Torque all connections to spec',
                        'Pressure test connections'
                    ],
                    testBop: false
                }
            ]
        },
        {
            id: 2,
            range: '26" - 17"1/2 or 16"',
            operations: [
                {
                    title: 'Cut of 30" guide tube & unscrew lading joint',
                    steps: [
                        'Cut 30" guide tube at designated depth',
                        'Unscrew landing joint carefully',
                        'Inspect threads and seals',
                        'Clean all surfaces'
                    ],
                    testBop: false
                },
                {
                    title: 'Screw or Nipple up casing head housing & test',
                    steps: [
                        'Position casing head housing',
                        'Screw/nipple up connections',
                        'Apply thread compound',
                        'Torque to specification',
                        'Perform pressure test'
                    ],
                    testBop: false
                },
                {
                    title: 'Nipple up BOP & Bell Nipple & Flow line',
                    steps: [
                        'Install BOP stack assembly',
                        'Connect Bell Nipple',
                        'Install flow line connections',
                        'Check all flanges and seals',
                        'Torque all bolts to spec'
                    ],
                    testBop: false
                },
                {
                    title: 'TEST BOP',
                    steps: [
                        'Close annular preventer',
                        'Pump to 5000 PSI',
                        'Hold pressure for 10 minutes',
                        'Check for leaks',
                        'Record test results',
                        'Open preventer',
                        'Pump to 10000 PSI',
                        'Hold pressure for 10 minutes',
                        'Verify no pressure drop'
                    ],
                    testBop: true
                }
            ]
        },
        {
            id: 3,
            range: '17"1/2 or 16" - 12"1/4',
            operations: [
                {
                    title: 'Nipple Down & Hang BOP',
                    steps: [
                        'Prepare BOP for removal',
                        'Disconnect flow lines',
                        'Secure BOP with cranes',
                        'Nipple down connections',
                        'Hang BOP on rig floor'
                    ],
                    testBop: false
                },
                {
                    title: 'Set CSG',
                    steps: [
                        'Run 13 3/8" casing string',
                        'Land casing in casing head',
                        'Circulate to clean hole',
                        'Prepare for cementing'
                    ],
                    testBop: false
                },
                {
                    title: 'Cut & Beeved CSG & lay landing joint',
                    steps: [
                        'Cut casing at designated height',
                        'Bevel casing end',
                        'Clean cut surface',
                        'Lay landing joint',
                        'Prepare for next BOP nipple up'
                    ],
                    testBop: false
                },
                {
                    title: 'Nipple Down BOP',
                    steps: [
                        'Disconnect remaining lines',
                        'Secure BOP assembly',
                        'Lower BOP to storage area',
                        'Inspect for damage'
                    ],
                    testBop: false
                },
                {
                    title: 'Nipple up Casing Spool & test',
                    steps: [
                        'Position casing spool',
                        'Make up connections',
                        'Apply thread compound',
                        'Torque to spec',
                        'Pressure test spool'
                    ],
                    testBop: false
                },
                {
                    title: 'Nipple up BOP & Bell Nipple & Flow line',
                    steps: [
                        'Install BOP on casing spool',
                        'Connect Bell Nipple',
                        'Install flow line',
                        'Check all connections',
                        'Torque to specification'
                    ],
                    testBop: false
                },
                {
                    title: 'TEST BOP',
                    steps: [
                        'Close all rams and annular',
                        'Pump to 5000 PSI',
                        'Hold for required time',
                        'Check for leakage',
                        'Record results',
                        'Test at 10000 PSI',
                        'Verify integrity'
                    ],
                    testBop: true
                }
            ]
        },
        {
            id: 4,
            range: '12"1/4 - 8"3/8 or 8"1/2',
            operations: [
                {
                    title: 'Nipple Down & Hang BOP',
                    steps: [
                        'Prepare for BOP removal',
                        'Disconnect all lines',
                        'Secure with rig cranes',
                        'Lower BOP carefully',
                        'Store in designated area'
                    ],
                    testBop: false
                },
                {
                    title: 'Set CSG',
                    steps: [
                        'Run 9 5/8" casing string',
                        'Land in casing spool',
                        'Circulate hole clean',
                        'Prepare cementing equipment'
                    ],
                    testBop: false
                },
                {
                    title: 'Cut & Beeved CSG & lay landing joint',
                    steps: [
                        'Cut 9 5/8" casing',
                        'Bevel cut end',
                        'Clean thoroughly',
                        'Install landing joint',
                        'Prepare for BOP installation'
                    ],
                    testBop: false
                },
                {
                    title: 'Nipple up BOP & Bell Nipple & Flow line',
                    steps: [
                        'Install BOP stack',
                        'Connect Bell Nipple',
                        'Install flow line system',
                        'Verify all connections',
                        'Torque to specification'
                    ],
                    testBop: false
                },
                {
                    title: 'Nipple up Tester Cup or Tester plug',
                    steps: [
                        'Select appropriate tester',
                        'Install in drill string',
                        'Verify seal integrity',
                        'Prepare for pressure test'
                    ],
                    testBop: false
                },
                {
                    title: 'TEST BOP',
                    steps: [
                        'Close preventers',
                        'Pump to 5000 PSI',
                        'Monitor pressure',
                        'Check for leaks',
                        'Record test data',
                        'Test at 10000 PSI',
                        'Confirm all tests pass'
                    ],
                    testBop: true
                }
            ]
        },
        {
            id: 5,
            range: '8"3/8 or 8"1/2 - 6"',
            operations: [
                {
                    title: 'Nipple Down & Hang BOP',
                    steps: [
                        'Prepare BOP for removal',
                        'Disconnect flow lines',
                        'Secure with cranes',
                        'Lower carefully',
                        'Store properly'
                    ],
                    testBop: false
                },
                {
                    title: 'Set CSG',
                    steps: [
                        'Run 7" liner/casing',
                        'Land in previous casing',
                        'Circulate to clean',
                        'Set liner hanger'
                    ],
                    testBop: false
                },
                {
                    title: 'Cut & Beeved CSG & lay landing joint',
                    steps: [
                        'Cut casing at correct height',
                        'Bevel the cut',
                        'Clean surfaces',
                        'Install landing joint'
                    ],
                    testBop: false
                },
                {
                    title: 'Nipple up BOP & Bell Nipple & Flow line',
                    steps: [
                        'Install BOP assembly',
                        'Connect Bell Nipple',
                        'Install flow lines',
                        'Check all seals',
                        'Torque connections'
                    ],
                    testBop: false
                },
                {
                    title: 'Nipple up Tester Cup or Tester plug',
                    steps: [
                        'Install tester cup',
                        'Verify proper seating',
                        'Check seal condition',
                        'Prepare for test'
                    ],
                    testBop: false
                },
                {
                    title: 'TEST BOP',
                    steps: [
                        'Close all preventers',
                        'Pump to 5000 PSI',
                        'Hold pressure',
                        'Monitor for leaks',
                        'Record results',
                        'Test at 10000 PSI',
                        'Final verification'
                    ],
                    testBop: true
                }
            ]
        }
    ],

    // بيانات العرض (Demo Data)
    demoEntries: [
        {
            date: '2026-05-09',
            rig: 'ENF#06',
            pusher: 'Senior Tool Pusher',
            interphase: '36"-26"',
            operation: 'Welding of 30" guide tube and Nipple up of Bell Nipple',
            psi5000: '2.5',
            psi5000Total: '2.5',
            psi10000: '1.5',
            psi10000Total: '1.5'
        },
        {
            date: '2026-05-09',
            rig: 'ENF#06',
            pusher: 'Senior Tool Pusher',
            interphase: '26" - 17"1/2 or 16"',
            operation: 'Cut of 30" guide tube & unscrew lading joint',
            psi5000: '3.0',
            psi5000Total: '5.5',
            psi10000: '2.0',
            psi10000Total: '3.5'
        },
        {
            date: '2026-05-09',
            rig: 'ENF#06',
            pusher: 'Senior Tool Pusher',
            interphase: '26" - 17"1/2 or 16"',
            operation: 'Screw or Nipple up casing head housing & test',
            psi5000: '4.5',
            psi5000Total: '10.0',
            psi10000: '3.5',
            psi10000Total: '7.0'
        }
    ]
};

// ===== حالة التطبيق =====
let appState = {
    selectedInterphase: null,
    currentEntry: {
        date: new Date().toISOString().split('T')[0],
        rig: 'ENF#06',
        pusher: 'Senior Tool Pusher',
        entries: []
    },
    savedData: JSON.parse(localStorage.getItem('enaford_bop_data') || '[]')
};

// ===== تهيئة التطبيق =====
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    populateRigs();
    populateToolPushers();
    renderInterphases();
    setDefaultDate();
    renderDataTable();
    setupEventListeners();
    updateStatusBar('Application initialized successfully');
}

// ===== تعبئة القوائم المنسدلة =====
function populateRigs() {
    const select = document.getElementById('rig-select');
    STATIC_DATA.rigs.forEach(rig => {
        const option = document.createElement('option');
        option.value = rig.id;
        option.textContent = rig.name;
        select.appendChild(option);
    });
}

function populateToolPushers() {
    const select = document.getElementById('pusher-select');
    STATIC_DATA.toolPushers.forEach(pusher => {
        const option = document.createElement('option');
        option.value = pusher.id;
        option.textContent = pusher.name;
        select.appendChild(option);
    });
}

function setDefaultDate() {
    document.getElementById('entry-date').value = appState.currentEntry.date;
}

// ===== عرض المراحل الانتقالية =====
function renderInterphases() {
    const container = document.getElementById('interphase-list');
    container.innerHTML = '';

    STATIC_DATA.interphases.forEach((interphase, index) => {
        const div = document.createElement('div');
        div.className = 'interphase-item';
        div.textContent = interphase.range;
        div.dataset.id = interphase.id;
        div.addEventListener('click', () => selectInterphase(interphase.id));
        container.appendChild(div);
    });
}

// ===== اختيار مرحلة انتقالية =====
function selectInterphase(id) {
    // تحديث الحالة
    appState.selectedInterphase = id;

    // تحديث الواجهة
    document.querySelectorAll('.interphase-item').forEach(item => {
        item.classList.remove('active');
        if (parseInt(item.dataset.id) === id) {
            item.classList.add('active');
        }
    });

    // عرض العمليات
    renderOperations(id);
    updateStatusBar(`Selected interphase: ${getInterphaseRange(id)}`);
}

function getInterphaseRange(id) {
    const interphase = STATIC_DATA.interphases.find(i => i.id === id);
    return interphase ? interphase.range : '';
}

// ===== عرض العمليات =====
function renderOperations(interphaseId) {
    const container = document.getElementById('operations-list');
    container.innerHTML = '';

    const interphase = STATIC_DATA.interphases.find(i => i.id === interphaseId);
    if (!interphase) return;

    interphase.operations.forEach((op, index) => {
        const group = document.createElement('div');
        group.className = 'operation-group';

        const title = document.createElement('div');
        title.className = 'operation-group-title';
        title.textContent = op.title;
        group.appendChild(title);

        const steps = document.createElement('div');
        steps.className = 'operation-steps';

        op.steps.forEach(step => {
            const stepDiv = document.createElement('div');
            stepDiv.className = 'operation-step';
            stepDiv.textContent = '• ' + step;
            steps.appendChild(stepDiv);
        });

        if (op.testBop) {
            const testDiv = document.createElement('div');
            testDiv.className = 'operation-step test-bop';
            testDiv.textContent = '⚠ TEST BOP - PRESSURE TEST REQUIRED';
            steps.appendChild(testDiv);
        }

        group.appendChild(steps);
        container.appendChild(group);
    });
}

// ===== عرض جدول البيانات =====
function renderDataTable() {
    const tbody = document.getElementById('data-table-body');
    tbody.innerHTML = '';

    // دمج البيانات التجريبية مع المحفوظة
    const allData = [...STATIC_DATA.demoEntries, ...appState.savedData];

    allData.forEach((entry, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${entry.date}</td>
            <td>${entry.rig}</td>
            <td>${entry.pusher}</td>
            <td>${entry.interphase}</td>
            <td>${entry.operation}</td>
            <td>${entry.psi5000 || '-'}</td>
            <td>${entry.psi5000Total || '-'}</td>
            <td>${entry.psi10000 || '-'}</td>
            <td>${entry.psi10000Total || '-'}</td>
        `;
        tbody.appendChild(row);
    });
}

// ===== إعداد مستمعي الأحداث =====
function setupEventListeners() {
    // أزرار التحكم السفلية
    document.getElementById('btn-refresh').addEventListener('click', refreshData);
    document.getElementById('btn-confirm').addEventListener('click', confirmEntry);
    document.getElementById('btn-edit').addEventListener('click', editEntry);
    document.getElementById('btn-copy').addEventListener('click', copyData);
    document.getElementById('btn-delete').addEventListener('click', deleteEntry);
    document.getElementById('btn-save').addEventListener('click', saveData);
    document.getElementById('btn-exit').addEventListener('click', exitApp);

    // تغيير الحفارة
    document.getElementById('rig-select').addEventListener('change', function() {
        appState.currentEntry.rig = this.value;
        updateStatusBar(`Rig changed to: ${this.value}`);
    });

    // تغيير التاريخ
    document.getElementById('entry-date').addEventListener('change', function() {
        appState.currentEntry.date = this.value;
    });

    // تغيير المشرف
    document.getElementById('pusher-select').addEventListener('change', function() {
        const pusher = STATIC_DATA.toolPushers.find(p => p.id === this.value);
        appState.currentEntry.pusher = pusher ? pusher.name : this.value;
    });
}

// ===== دوال الأزرار =====
function refreshData() {
    renderDataTable();
    updateStatusBar('Data refreshed successfully');
}

function confirmEntry() {
    if (!appState.selectedInterphase) {
        alert('Please select an interphase first!');
        return;
    }

    // جمع البيانات من حقول الإدخال
    const interphase = STATIC_DATA.interphases.find(i => i.id === appState.selectedInterphase);
    const operations = interphase.operations;

    operations.forEach((op, index) => {
        const psi5000 = document.getElementById(`psi5000-${index}`)?.value || '';
        const psi5000Total = document.getElementById(`psi5000-total-${index}`)?.value || '';
        const psi10000 = document.getElementById(`psi10000-${index}`)?.value || '';
        const psi10000Total = document.getElementById(`psi10000-total-${index}`)?.value || '';

        if (psi5000 || psi10000) {
            const entry = {
                date: appState.currentEntry.date,
                rig: appState.currentEntry.rig,
                pusher: appState.currentEntry.pusher,
                interphase: interphase.range,
                operation: op.title,
                psi5000: psi5000,
                psi5000Total: psi5000Total,
                psi10000: psi10000,
                psi10000Total: psi10000Total
            };

            appState.currentEntry.entries.push(entry);
        }
    });

    updateStatusBar('Entry confirmed successfully');
    alert('Entry confirmed! Click SAVE to store data.');
}

function editEntry() {
    updateStatusBar('Edit mode activated');
    alert('Edit functionality - Select a row from the table to edit');
}

function copyData() {
    const tableData = document.getElementById('data-table-body').innerText;
    navigator.clipboard.writeText(tableData).then(() => {
        updateStatusBar('Data copied to clipboard');
        alert('Data copied to clipboard!');
    });
}

function deleteEntry() {
    if (confirm('Are you sure you want to delete the selected entry?')) {
        updateStatusBar('Entry deleted');
        alert('Delete functionality - Select a row to delete');
    }
}

function saveData() {
    if (appState.currentEntry.entries.length === 0) {
        alert('No entries to save! Please confirm an entry first.');
        return;
    }

    // حفظ في localStorage
    appState.savedData = [...appState.savedData, ...appState.currentEntry.entries];
    localStorage.setItem('enaford_bop_data', JSON.stringify(appState.savedData));

    // إعادة تعيين الإدخال الحالي
    appState.currentEntry.entries = [];

    // تحديث الجدول
    renderDataTable();

    updateStatusBar('Data saved successfully to local storage');
    alert('Data saved successfully! ✅');
}

function exitApp() {
    if (confirm('Are you sure you want to exit? Unsaved data will be lost.')) {
        window.close();
        // إذا لم يغلق النافذة (متصفح)
        document.body.innerHTML = '<div style="text-align:center;padding:50px;font-size:24px;">Application Closed</div>';
    }
}

// ===== تحديث شريط الحالة =====
function updateStatusBar(message) {
    const statusBar = document.getElementById('status-message');
    const now = new Date().toLocaleTimeString();
    statusBar.textContent = `[${now}] ${message}`;
}

// ===== Modal Functions =====
function showModal(title, content) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-body').innerHTML = content;
    document.getElementById('modal-overlay').classList.add('active');
}

function closeModal() {
    document.getElementById('modal-overlay').classList.remove('active');
}

// ===== Export Functions =====
function exportToCSV() {
    const allData = [...STATIC_DATA.demoEntries, ...appState.savedData];
    if (allData.length === 0) {
        alert('No data to export!');
        return;
    }

    let csv = 'Date,Rig,Tool Pusher,Interphase,Operation,5000 PSI HRS,5000 PSI TOT.H,10000 PSI HRS,10000 PSI TOT.H\n';

    allData.forEach(entry => {
        csv += `${entry.date},${entry.rig},${entry.pusher},${entry.interphase},${entry.operation},${entry.psi5000},${entry.psi5000Total},${entry.psi10000},${entry.psi10000Total}\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ENAFOR_BOP_Data_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);

    updateStatusBar('Data exported to CSV');
}

// ===== Keyboard Shortcuts =====
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        saveData();
    }
    if (e.ctrlKey && e.key === 'e') {
        e.preventDefault();
        exportToCSV();
    }
});