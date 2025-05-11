import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/", //Страница авторизации
            name: "authotrization",
            component: () => import("../views/AuthorizationView.vue"),
        },
        {
            path: "/menu", //Страница меню
            name: "menu",
            component: () => import("../views/MenuView.vue"),
        },
        {
            path: "/transporation", //Страница грузоперевозок
            name: "transporation",
            redirect: "/transporation/menu",
            children: [
                {
                    path: "menu", //Страница меню грузоперевозок
                    name: "transporation-menu",
                    component: () => import("../views/TransportationMenuView.vue"),
                },
                {
                    path: "create", //Страница создания заявки на грузоперевозку
                    name: "transporation-create",
                    component: () => import("../views/TransportationCreateView.vue"),
                },
            ],
        },
        {
            path: "/invoice", //Страница накладной
            name: "invoice",
            redirect: "/invoice/menu",
            children: [
                {
                    path: "menu", //Страница меню грузоперевозок
                    name: "invoice-menu",
                    component: () => import("../views/InvoiceMenuView.vue"),
                },
                {
                    path: "create", //Страница создания заявки на грузоперевозку
                    name: "invoice-create",
                    component: () => import("../views/InvoiceCreateView.vue"),
                },
            ],
        },
        {
            path: "/act", //Страница актов
            name: "act",
            redirect: "/act/menu",
            children: [
                {
                    path: "menu", //Страница меню актов
                    name: "act-menu",
                    component: () => import("../views/ActMenuView.vue"),
                },
                {
                    path: "common", //Страница общих актов
                    redirect: "/act/common/menu",
                    name: "act-common",
                    children: [
                        {
                            path: "menu", //Страница меню общих актов
                            name: "act-common-menu",
                            component: () => import("../views/CommonActMenuView.vue"),
                        },
                        {
                            path: "create", //Страница создания общего акта
                            name: "act-common-create",
                            component: () => import("../views/CommonActCreateView.vue"),
                        },
                    ],
                },
                {
                    path: "commercial", //Страница коммерческих актов
                    redirect: "/act/commercial/menu",
                    name: "act-commercial",
                    children: [
                        {
                            path: "menu", //Страница меню коммерческих актов
                            name: "act-commercial-menu",
                            component: () => import("../views/CommercialActMenuView.vue"),
                        },
                        {
                            path: "create", //Страница создания коммерческих акта
                            name: "act-commercial-create",
                            component: () => import("../views/CommercialActCreateView.vue"),
                        },
                    ],
                },
            ],
        },
        {
            path: "/reminder", //Страница памятки
            name: "reminder",
            redirect: "/reminder/menu",
            children: [
                {
                    path: "menu", //Страница меню памятки
                    name: "reminder-menu",
                    component: () => import("../views/ReminderMenuView.vue"),
                },
                {
                    path: "create", //Страница создания памятки
                    name: "reminder-create",
                    component: () => import("../views/ReminderCreateView.vue"),
                },
            ],
        },
        {
            path: "/filling-statement", //Страница ведомости подачи и уборки
            name: "filling-statement",
            redirect: "/filling-statement/menu",
            children: [
                {
                    path: "menu", //Страница меню ведомости подачи и уборки
                    name: "filling-statement-menu",
                    component: () => import("../views/FillingStatementMenuView.vue"),
                },
                {
                    path: "create", //Страница создания ведомости подачи и уборки
                    name: "filling-statement-create",
                    component: () => import("../views/FillingStatementCreateView.vue"),
                },
            ],
        },
        {
            path: "/cumulative-statement", //Страница накопительной ведомости
            name: "cumulative-statement",
            redirect: "/cumulative-statement/menu",
            children: [
                {
                    path: "menu", //Страница меню накопительной ведомости
                    name: "cumulative-statement-menu",
                    component: () => import("../views/CumulativeStatementMenuView.vue"),
                },
                {
                    path: "create", //Страница создания накопительной ведомости
                    name: "cumulative-statement-create",
                    component: () => import("../views/CumulativeStatementCreateView.vue"),
                },
            ],
        },
        {
            path: "/beginner-scenario", //Страница Сценарий обучения "Новичок"
            name: "beginner-scenario",
            redirect: "/beginner-scenario/menu",
            children: [
                {
                    path: "menu", //Страница меню Сценарий обучения "Новичок"
                    name: "beginner-scenario-menu",
                    component: () => import("../views/BeginnerScenarioMenuView.vue"),
                },
            ],
        },
        {
            path: "/beginner-instructions", //Страница Сценарий "Новичок" - Инструкции
            name: "beginner-instructions",
            redirect: "/beginner-instructions/menu",
            children: [
                {
                    path: "menu", //Страница меню Сценарий "Новичок" - Инструкции
                    name: "beginner-instructions-menu",
                    component: () => import("../views/BeginnerInstructionsView.vue"),
                },
                {
                    path: "transporation", //Страница Сценарий "Новичок" - Инструкции - Инструкции на заявку по грузоперевозке
                    name: "beginner-instructions-transporation",
                    component: () => import("../views/BeginnerTransporationView.vue"),
                },
            ],
        },
        {
            path: "/advanced-scenario", //Страница Сценарий обучения "Продвинутый"
            name: "advanced-scenario",
            redirect: "/advanced-scenario/menu",
            children: [
                {
                    path: "menu", //Страница меню Сценарий обучения "Продвинутый"
                    name: "advanced-scenario-menu",
                    component: () => import("../views/AdvancedScenarioMenuView.vue"),
                },
            ],
        },
        {
            path: "/test-mode", //Страница Режим теста
            name: "test-mode",
            component: () => import("../views/TestModeView.vue"),
        },
    ],
});

const PAGE_TITLE = {
    "authotrization": "Авторизация",
    "menu": "Тренажер ЭТРАН главное меню",
    "transporation-menu": "Заявка на грузоперевозку",
    "transporation-create": "Заявка на грузоперевозку",
    "invoice-menu": "Накладная",
    "invoice-create": "Накладная ",
    "invoice-menu": "Накладная",
    "invoice-create": "Накладная ",
};

router.afterEach((toRoute, fromRoute) => {
    window.document.title = PAGE_TITLE[toRoute.name] ?? 'Тренажер ЭТРАН';
    console.log(toRoute); // this lets you check what else is available to you here
});

export default router;
