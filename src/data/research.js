import { projects } from './projects.js';

const projectFor = (slug) => projects.find((project) => project.slug === slug);

export const papers = [
  {
    slug: 'sage-pinn',
    title:
      'SAGE-PINN: A Singularity-free Axisymmetric Geometry-Encoded Physics-Informed Neural Network for Axisymmetric Multiphysics Flow in Cylindrical Coordinates',
    authors: ['Raj Maurya', 'Joyprakash Akhuli', 'Doyel Pandey'],
    venue: 'arXiv 2610.10449 · submitted to Journal of Computational Physics',
    year: 2026,
    status: 'Preprint',
    summary:
      'PINNs in cylindrical coordinates carry 1/r terms that blow up on the axis. SAGE-PINN removes the singularity by construction.',
    links: { paper: 'https://arxiv.org/abs/2610.10449', pdf: 'https://arxiv.org/pdf/2610.10449' },
  },
  {
    slug: 'eof-pinn',
    title: 'SAFE-PINN: A Singularity-Free Physics-Informed Neural Network for Electroosmotic Flow in a Cylindrical Nanochannel with Axially Varying Zeta Potential',
    authors: ['Raj Maurya', 'Doyel Pandey', 'Somchai Wongwises'],
    venue: 'Manuscript in preparation',
    year: 2026,
    status: 'In preparation',
    summary:
      'PINN for coupled Poisson-Nernst-Planck + Stokes electroosmotic flow with an axially varying wall zeta potential.',
    links: {},
  },
];

export const studies = [
  {
    slug: 'blood-flow',
    title: 'Near-wall blood flow from sparse data',
    kind: 'Replication',
    year: 2026,
    summary:
      'Re-implements Arzani, Wang & D’Souza (Phys. Fluids, 2021): PINNs recover near-wall haemodynamics in stenosis and aneurysm geometries from a handful of sensors, with CFD references generated in COMSOL.',
  },
  {
    slug: 'wavy-channel',
    title: 'Flow and heat transfer in a wavy channel',
    kind: 'Replication',
    year: 2026,
    summary:
      'PINN replication of a wavy-patterned channel study with COMSOL references, reconstructed collocation sampling and experiments in balancing the physics losses. Pressure and thermal robustness remain in progress.',
  },
  {
    slug: 'neuro-trade',
    title: 'Neuro-Trade: Fokker-Planck PINNs for Indian equities',
    kind: 'Quant research',
    year: 2025,
    summary:
      'From GBM and Heston-Fokker-Planck solvers to a PINN that learns drift and diffusion of 14 NSE stocks (2015-2025) by solving the Fokker-Planck inverse problem against empirical densities.',
  },
  {
    slug: 'ctaea',
    title: 'C-TAEA for constrained multi-objective optimisation',
    kind: 'Replication',
    year: 2026,
    summary:
      'Implementation of C-TAEA alongside five constrained multi-objective algorithms, with DTLZ benchmark variations, performance metrics and experiment reports.',
  },
  {
    slug: 'superhedging',
    title: 'Neural-network approximation for superhedging prices',
    kind: 'Quant research',
    year: 2026,
    summary: 'Replication and extension of Biagini, Gonon and Reitsam (2023), with time-zero pricing experiments and reproducibility checks. Dynamic-method validation remains in progress.',
  },
  {
    slug: 'paper-devices',
    title: 'Paper-based smartphone soil analysis',
    kind: 'Exploratory research',
    year: 2026,
    summary: 'Literature and product review for low-cost paper assays read by a smartphone, with color references and image analysis for soil nutrient screening.',
  },
].map((study) => ({
  ...study,
  code: projectFor(study.slug).links.code,
  private: projectFor(study.slug).private,
}));

export const interestsResearch = [
  'Physics-informed and theory-aware deep learning',
  'Computational fluid dynamics and micro/nano-fluidics',
  'Stochastic calculus and quantitative finance',
  'Computational complexity',
  'Quantum computing',
];
