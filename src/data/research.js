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
    title: 'Physics-informed learning of electroosmotic flow in cylindrical nanochannels',
    authors: ['Doyel Pandey', 'Raj Maurya'],
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
    title: 'Near-wall blood flow from sparse data',
    kind: 'Replication',
    year: 2026,
    summary:
      'Re-implements Arzani, Wang & D’Souza (Phys. Fluids, 2021): PINNs recover near-wall haemodynamics in stenosis and aneurysm geometries from a handful of sensors, with CFD references generated in COMSOL.',
    private: true,
  },
  {
    title: 'Flow and heat transfer in a wavy channel',
    kind: 'Replication',
    year: 2026,
    summary:
      'Unsupervised PINN replication of a wavy-patterned channel study for which no code or data were released — every hyper-parameter re-derived from the paper.',
    private: true,
  },
  {
    title: 'Neuro-Trade: Fokker-Planck PINNs for Indian equities',
    kind: 'Quant research',
    year: 2025,
    summary:
      'From GBM and Heston-Fokker-Planck solvers to a PINN that learns drift and diffusion of 14 NSE stocks (2015-2025) by solving the Fokker-Planck inverse problem against empirical densities.',
    code: 'https://github.com/rajm012/Neuro-Trade-via-PINNs',
  },
  {
    title: 'C-TAEA for constrained multi-objective optimisation',
    kind: 'Replication',
    year: 2026,
    summary:
      'Full from-scratch implementation of the two-archive evolutionary algorithm (IEEE TEVC) with benchmark problem variations, metrics and proposed improvements.',
    code: 'https://github.com/rajm012/Quant-Finance-Project',
  },
  {
    title: 'Bessel and Legendre equations with PINNs',
    kind: 'Study',
    year: 2024,
    summary: 'Early work embedding classical special-function ODEs into the training loss of a neural network.',
    code: 'https://github.com/rajm012/Diifferential-Equation-by-PINN',
  },
];

export const interestsResearch = [
  'Physics-informed and theory-aware deep learning',
  'Computational fluid dynamics and micro/nano-fluidics',
  'Stochastic calculus and quantitative finance',
  'Computational complexity',
  'Quantum computing',
];
