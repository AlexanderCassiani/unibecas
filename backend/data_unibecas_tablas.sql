--
-- PostgreSQL database dump
--

\restrict ZdzJHztzp7iU0hSWbVlUEQCzGXp1wOGplIFr6d9jpObjt5Pu3nGn1S7jdaNcxSX

-- Dumped from database version 18.6
-- Dumped by pg_dump version 18.6

-- Started on 2026-10-14 15:19:48

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 226 (class 1259 OID 16618)
-- Name: becas; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.becas (
    id_beca integer NOT NULL,
    nombre_beca character varying(120) NOT NULL,
    fecha_creacion_sys timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    vigencia_programa character varying(50) DEFAULT 'No definido'::character varying NOT NULL,
    descripcion_informacion text NOT NULL,
    informacion_aplicar text NOT NULL,
    modalidad character varying(50) NOT NULL,
    cobertura text NOT NULL,
    id_universidad_acceso integer,
    estado character varying(20) DEFAULT 'En proceso'::character varying NOT NULL,
    url_informacion character varying(255) NOT NULL,
    proveedor_beca integer NOT NULL,
    CONSTRAINT becas_estado_check CHECK (((estado)::text = ANY ((ARRAY['En proceso'::character varying, 'Activa'::character varying, 'Vencida'::character varying, 'Suspendida'::character varying])::text[]))),
    CONSTRAINT becas_modalidad_check CHECK (((modalidad)::text = ANY ((ARRAY['Pregrado'::character varying, 'Posgrado'::character varying, 'Tecnologica'::character varying, 'Tecnica'::character varying])::text[])))
);


--
-- TOC entry 225 (class 1259 OID 16617)
-- Name: becas_id_beca_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.becas_id_beca_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4975 (class 0 OID 0)
-- Dependencies: 225
-- Name: becas_id_beca_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.becas_id_beca_seq OWNED BY public.becas.id_beca;


--
-- TOC entry 228 (class 1259 OID 16654)
-- Name: carreras; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.carreras (
    id_carrera integer NOT NULL,
    codigo_snies_programa character varying(20) NOT NULL,
    nombre_programa character varying(150) NOT NULL,
    titulo_otorgado character varying(150) NOT NULL,
    nivel_formacion character varying(40) NOT NULL,
    numero_semestres integer NOT NULL,
    creditos_totales integer NOT NULL,
    periodicidad_admision character varying(20) DEFAULT 'Semestral'::character varying,
    id_universidad_fk integer NOT NULL,
    tipo_acreditacion character varying(80) DEFAULT 'Registro Calificado'::character varying CONSTRAINT carreras_estado_not_null NOT NULL,
    CONSTRAINT carreras_creditos_totales_check CHECK ((creditos_totales > 0)),
    CONSTRAINT carreras_nivel_formacion_check CHECK (((nivel_formacion)::text = ANY ((ARRAY['Técnico Profesional'::character varying, 'Tecnólogo'::character varying, 'Pregrado Universitario'::character varying, 'Especialización'::character varying, 'Maestría'::character varying, 'Doctorado'::character varying])::text[]))),
    CONSTRAINT carreras_numero_semestres_check CHECK ((numero_semestres > 0)),
    CONSTRAINT carreras_periodicidad_admision_check CHECK (((periodicidad_admision)::text = ANY ((ARRAY['Semestral'::character varying, 'Anual'::character varying])::text[]))),
    CONSTRAINT chk_carreras_estado CHECK (((tipo_acreditacion)::text = ANY ((ARRAY['Registro Calificado'::character varying, 'Acreditacion de Alta Calidad'::character varying, 'No definido'::character varying])::text[])))
);


--
-- TOC entry 227 (class 1259 OID 16653)
-- Name: carreras_id_carrera_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.carreras_id_carrera_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4976 (class 0 OID 0)
-- Dependencies: 227
-- Name: carreras_id_carrera_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.carreras_id_carrera_seq OWNED BY public.carreras.id_carrera;


--
-- TOC entry 224 (class 1259 OID 16602)
-- Name: entidades; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.entidades (
    id_entidad integer NOT NULL,
    nom_ent character varying(120) NOT NULL,
    tipo_ent character varying(120) DEFAULT 'N/A'::character varying NOT NULL,
    nit_ent character varying(40) DEFAULT 'No hay datos'::character varying NOT NULL,
    CONSTRAINT entidades_tipo_ent_check CHECK (((tipo_ent)::text = ANY ((ARRAY['N/A'::character varying, 'Entidad Publica'::character varying, 'IES'::character varying, 'Entidades Privadas'::character varying, 'ESAL o Fundacion'::character varying, 'Organismo Internacional'::character varying])::text[])))
);


--
-- TOC entry 223 (class 1259 OID 16601)
-- Name: entidades_id_entidad_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.entidades_id_entidad_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4977 (class 0 OID 0)
-- Dependencies: 223
-- Name: entidades_id_entidad_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.entidades_id_entidad_seq OWNED BY public.entidades.id_entidad;


--
-- TOC entry 222 (class 1259 OID 16581)
-- Name: universidades; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.universidades (
    id_universidad integer NOT NULL,
    nom_institucion character varying(120) NOT NULL,
    siglas character varying(25) DEFAULT 'No aplica'::character varying,
    codigo_snies character varying(28) NOT NULL,
    mod_presencial boolean DEFAULT true NOT NULL,
    mod_virtual boolean DEFAULT true NOT NULL,
    mod_hibrida boolean DEFAULT true NOT NULL,
    mod_adistancia boolean DEFAULT true NOT NULL,
    ciudad character varying(80) NOT NULL,
    departamento character varying(80) NOT NULL
);


--
-- TOC entry 221 (class 1259 OID 16580)
-- Name: universidades_id_universidad_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.universidades_id_universidad_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4978 (class 0 OID 0)
-- Dependencies: 221
-- Name: universidades_id_universidad_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.universidades_id_universidad_seq OWNED BY public.universidades.id_universidad;


--
-- TOC entry 220 (class 1259 OID 16561)
-- Name: usuario; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.usuario (
    id_user integer NOT NULL,
    nombre_com character varying(60) NOT NULL,
    apellido_com character varying(60) NOT NULL,
    correo character varying(80) NOT NULL,
    num_tel character varying(12) DEFAULT 'No aplica'::character varying,
    passcon character varying(260) CONSTRAINT "usuario_contrase¤a_not_null" NOT NULL,
    rol character varying(80) DEFAULT 'Usuario'::character varying NOT NULL,
    estado boolean DEFAULT true NOT NULL,
    CONSTRAINT usuario_rol_check CHECK (((rol)::text = ANY ((ARRAY['Usuario'::character varying, 'AaAdmin'::character varying])::text[])))
);


--
-- TOC entry 219 (class 1259 OID 16560)
-- Name: usuario_id_user_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.usuario_id_user_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4979 (class 0 OID 0)
-- Dependencies: 219
-- Name: usuario_id_user_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.usuario_id_user_seq OWNED BY public.usuario.id_user;


--
-- TOC entry 4788 (class 2604 OID 16621)
-- Name: becas id_beca; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.becas ALTER COLUMN id_beca SET DEFAULT nextval('public.becas_id_beca_seq'::regclass);


--
-- TOC entry 4792 (class 2604 OID 16657)
-- Name: carreras id_carrera; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.carreras ALTER COLUMN id_carrera SET DEFAULT nextval('public.carreras_id_carrera_seq'::regclass);


--
-- TOC entry 4785 (class 2604 OID 16605)
-- Name: entidades id_entidad; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.entidades ALTER COLUMN id_entidad SET DEFAULT nextval('public.entidades_id_entidad_seq'::regclass);


--
-- TOC entry 4779 (class 2604 OID 16584)
-- Name: universidades id_universidad; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.universidades ALTER COLUMN id_universidad SET DEFAULT nextval('public.universidades_id_universidad_seq'::regclass);


--
-- TOC entry 4775 (class 2604 OID 16564)
-- Name: usuario id_user; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.usuario ALTER COLUMN id_user SET DEFAULT nextval('public.usuario_id_user_seq'::regclass);


--
-- TOC entry 4815 (class 2606 OID 16638)
-- Name: becas becas_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.becas
    ADD CONSTRAINT becas_pkey PRIMARY KEY (id_beca);


--
-- TOC entry 4817 (class 2606 OID 16674)
-- Name: carreras carreras_codigo_snies_programa_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.carreras
    ADD CONSTRAINT carreras_codigo_snies_programa_key UNIQUE (codigo_snies_programa);


--
-- TOC entry 4819 (class 2606 OID 16672)
-- Name: carreras carreras_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.carreras
    ADD CONSTRAINT carreras_pkey PRIMARY KEY (id_carrera);


--
-- TOC entry 4811 (class 2606 OID 16616)
-- Name: entidades entidades_nit_ent_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.entidades
    ADD CONSTRAINT entidades_nit_ent_key UNIQUE (nit_ent);


--
-- TOC entry 4813 (class 2606 OID 16614)
-- Name: entidades entidades_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.entidades
    ADD CONSTRAINT entidades_pkey PRIMARY KEY (id_entidad);


--
-- TOC entry 4809 (class 2606 OID 16600)
-- Name: universidades universidades_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.universidades
    ADD CONSTRAINT universidades_pkey PRIMARY KEY (id_universidad);


--
-- TOC entry 4805 (class 2606 OID 16645)
-- Name: usuario usuario_correo_unique; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_correo_unique UNIQUE (correo);


--
-- TOC entry 4807 (class 2606 OID 16579)
-- Name: usuario usuario_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (id_user);


--
-- TOC entry 4820 (class 2606 OID 16639)
-- Name: becas becas_id_universidad_acceso_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.becas
    ADD CONSTRAINT becas_id_universidad_acceso_fkey FOREIGN KEY (id_universidad_acceso) REFERENCES public.universidades(id_universidad) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 4822 (class 2606 OID 16675)
-- Name: carreras carreras_id_universidad_fk_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.carreras
    ADD CONSTRAINT carreras_id_universidad_fk_fkey FOREIGN KEY (id_universidad_fk) REFERENCES public.universidades(id_universidad) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 4821 (class 2606 OID 16648)
-- Name: becas proveedor_beca_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.becas
    ADD CONSTRAINT proveedor_beca_fk FOREIGN KEY (proveedor_beca) REFERENCES public.entidades(id_entidad);


-- Completed on 2026-10-14 15:19:48

--
-- PostgreSQL database dump complete
--

\unrestrict ZdzJHztzp7iU0hSWbVlUEQCzGXp1wOGplIFr6d9jpObjt5Pu3nGn1S7jdaNcxSX

