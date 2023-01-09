Search.setIndex({docnames:["CONTRIBUTING","api-reference","autodiff","bibliography","examples/notebooks/mixture_of_gaussians","index","manifolds","optimizers","problem","quickstart","tools"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.viewcode":1,nbsphinx:3,sphinx:56},filenames:["CONTRIBUTING.md","api-reference.rst","autodiff.rst","bibliography.rst","examples/notebooks/mixture_of_gaussians.ipynb","index.rst","manifolds.rst","optimizers.rst","problem.rst","quickstart.rst","tools.rst"],objects:{"pymanopt.autodiff":{Function:[2,1,1,""],backend_decorator_factory:[2,3,1,""]},"pymanopt.autodiff.Function":{get_gradient_operator:[2,2,1,""],get_hessian_operator:[2,2,1,""]},"pymanopt.core":{problem:[8,0,0,"-"]},"pymanopt.core.problem":{Problem:[8,1,1,""]},"pymanopt.core.problem.Problem":{cost:[8,4,1,""],euclidean_gradient:[8,4,1,""],euclidean_hessian:[8,4,1,""],riemannian_gradient:[8,4,1,""],riemannian_hessian:[8,4,1,""]},"pymanopt.function":{autograd:[2,3,1,""],jax:[2,3,1,""],numpy:[2,3,1,""],pytorch:[2,3,1,""],tensorflow:[2,3,1,""]},"pymanopt.manifolds":{complex_circle:[6,0,0,"-"],euclidean:[6,0,0,"-"],fixed_rank:[6,0,0,"-"],grassmann:[6,0,0,"-"],group:[6,0,0,"-"],hyperbolic:[6,0,0,"-"],manifold:[6,0,0,"-"],oblique:[6,0,0,"-"],positive:[6,0,0,"-"],positive_definite:[6,0,0,"-"],product:[6,0,0,"-"],psd:[6,0,0,"-"],sphere:[6,0,0,"-"],stiefel:[6,0,0,"-"]},"pymanopt.manifolds.complex_circle":{ComplexCircle:[6,1,1,""]},"pymanopt.manifolds.complex_circle.ComplexCircle":{dim:[6,4,1,""],dist:[6,2,1,""],embedding:[6,2,1,""],euclidean_to_riemannian_gradient:[6,2,1,""],euclidean_to_riemannian_hessian:[6,2,1,""],exp:[6,2,1,""],inner_product:[6,2,1,""],log:[6,2,1,""],norm:[6,2,1,""],num_values:[6,4,1,""],pair_mean:[6,2,1,""],point_layout:[6,4,1,""],projection:[6,2,1,""],random_point:[6,2,1,""],random_tangent_vector:[6,2,1,""],retraction:[6,2,1,""],to_tangent_space:[6,2,1,""],transport:[6,2,1,""],typical_dist:[6,4,1,""],weingarten:[6,2,1,""],zero_vector:[6,2,1,""]},"pymanopt.manifolds.euclidean":{Euclidean:[6,1,1,""],SkewSymmetric:[6,1,1,""],Symmetric:[6,1,1,""]},"pymanopt.manifolds.euclidean.Euclidean":{dim:[6,4,1,""],dist:[6,2,1,""],embedding:[6,2,1,""],euclidean_to_riemannian_gradient:[6,2,1,""],euclidean_to_riemannian_hessian:[6,2,1,""],exp:[6,2,1,""],inner_product:[6,2,1,""],log:[6,2,1,""],norm:[6,2,1,""],num_values:[6,4,1,""],pair_mean:[6,2,1,""],point_layout:[6,4,1,""],projection:[6,2,1,""],random_point:[6,2,1,""],random_tangent_vector:[6,2,1,""],retraction:[6,2,1,""],to_tangent_space:[6,2,1,""],transport:[6,2,1,""],typical_dist:[6,4,1,""],weingarten:[6,2,1,""],zero_vector:[6,2,1,""]},"pymanopt.manifolds.euclidean.SkewSymmetric":{dim:[6,4,1,""],dist:[6,2,1,""],embedding:[6,2,1,""],euclidean_to_riemannian_gradient:[6,2,1,""],euclidean_to_riemannian_hessian:[6,2,1,""],exp:[6,2,1,""],inner_product:[6,2,1,""],log:[6,2,1,""],norm:[6,2,1,""],num_values:[6,4,1,""],pair_mean:[6,2,1,""],point_layout:[6,4,1,""],projection:[6,2,1,""],random_point:[6,2,1,""],random_tangent_vector:[6,2,1,""],retraction:[6,2,1,""],to_tangent_space:[6,2,1,""],transport:[6,2,1,""],typical_dist:[6,4,1,""],weingarten:[6,2,1,""],zero_vector:[6,2,1,""]},"pymanopt.manifolds.euclidean.Symmetric":{dim:[6,4,1,""],dist:[6,2,1,""],embedding:[6,2,1,""],euclidean_to_riemannian_gradient:[6,2,1,""],euclidean_to_riemannian_hessian:[6,2,1,""],exp:[6,2,1,""],inner_product:[6,2,1,""],log:[6,2,1,""],norm:[6,2,1,""],num_values:[6,4,1,""],pair_mean:[6,2,1,""],point_layout:[6,4,1,""],projection:[6,2,1,""],random_point:[6,2,1,""],random_tangent_vector:[6,2,1,""],retraction:[6,2,1,""],to_tangent_space:[6,2,1,""],transport:[6,2,1,""],typical_dist:[6,4,1,""],weingarten:[6,2,1,""],zero_vector:[6,2,1,""]},"pymanopt.manifolds.fixed_rank":{FixedRankEmbedded:[6,1,1,""]},"pymanopt.manifolds.fixed_rank.FixedRankEmbedded":{dim:[6,4,1,""],dist:[6,2,1,""],embedding:[6,2,1,""],euclidean_to_riemannian_gradient:[6,2,1,""],euclidean_to_riemannian_hessian:[6,2,1,""],exp:[6,2,1,""],inner_product:[6,2,1,""],log:[6,2,1,""],norm:[6,2,1,""],num_values:[6,4,1,""],pair_mean:[6,2,1,""],point_layout:[6,4,1,""],projection:[6,2,1,""],random_point:[6,2,1,""],random_tangent_vector:[6,2,1,""],retraction:[6,2,1,""],to_tangent_space:[6,2,1,""],transport:[6,2,1,""],typical_dist:[6,4,1,""],weingarten:[6,2,1,""],zero_vector:[6,2,1,""]},"pymanopt.manifolds.grassmann":{ComplexGrassmann:[6,1,1,""],Grassmann:[6,1,1,""]},"pymanopt.manifolds.grassmann.ComplexGrassmann":{dim:[6,4,1,""],dist:[6,2,1,""],embedding:[6,2,1,""],euclidean_to_riemannian_gradient:[6,2,1,""],euclidean_to_riemannian_hessian:[6,2,1,""],exp:[6,2,1,""],inner_product:[6,2,1,""],log:[6,2,1,""],norm:[6,2,1,""],num_values:[6,4,1,""],pair_mean:[6,2,1,""],point_layout:[6,4,1,""],projection:[6,2,1,""],random_point:[6,2,1,""],random_tangent_vector:[6,2,1,""],retraction:[6,2,1,""],to_tangent_space:[6,2,1,""],transport:[6,2,1,""],typical_dist:[6,4,1,""],zero_vector:[6,2,1,""]},"pymanopt.manifolds.grassmann.Grassmann":{dim:[6,4,1,""],dist:[6,2,1,""],embedding:[6,2,1,""],euclidean_to_riemannian_gradient:[6,2,1,""],euclidean_to_riemannian_hessian:[6,2,1,""],exp:[6,2,1,""],inner_product:[6,2,1,""],log:[6,2,1,""],norm:[6,2,1,""],num_values:[6,4,1,""],pair_mean:[6,2,1,""],point_layout:[6,4,1,""],projection:[6,2,1,""],random_point:[6,2,1,""],random_tangent_vector:[6,2,1,""],retraction:[6,2,1,""],to_tangent_space:[6,2,1,""],transport:[6,2,1,""],typical_dist:[6,4,1,""],zero_vector:[6,2,1,""]},"pymanopt.manifolds.group":{SpecialOrthogonalGroup:[6,1,1,""],UnitaryGroup:[6,1,1,""]},"pymanopt.manifolds.group.SpecialOrthogonalGroup":{dim:[6,4,1,""],dist:[6,2,1,""],embedding:[6,2,1,""],euclidean_to_riemannian_gradient:[6,2,1,""],euclidean_to_riemannian_hessian:[6,2,1,""],exp:[6,2,1,""],inner_product:[6,2,1,""],log:[6,2,1,""],norm:[6,2,1,""],num_values:[6,4,1,""],pair_mean:[6,2,1,""],point_layout:[6,4,1,""],projection:[6,2,1,""],random_point:[6,2,1,""],random_tangent_vector:[6,2,1,""],retraction:[6,2,1,""],to_tangent_space:[6,2,1,""],transport:[6,2,1,""],typical_dist:[6,4,1,""],weingarten:[6,2,1,""],zero_vector:[6,2,1,""]},"pymanopt.manifolds.group.UnitaryGroup":{dim:[6,4,1,""],dist:[6,2,1,""],embedding:[6,2,1,""],euclidean_to_riemannian_gradient:[6,2,1,""],euclidean_to_riemannian_hessian:[6,2,1,""],exp:[6,2,1,""],inner_product:[6,2,1,""],log:[6,2,1,""],norm:[6,2,1,""],num_values:[6,4,1,""],pair_mean:[6,2,1,""],point_layout:[6,4,1,""],projection:[6,2,1,""],random_point:[6,2,1,""],random_tangent_vector:[6,2,1,""],retraction:[6,2,1,""],to_tangent_space:[6,2,1,""],transport:[6,2,1,""],typical_dist:[6,4,1,""],weingarten:[6,2,1,""],zero_vector:[6,2,1,""]},"pymanopt.manifolds.hyperbolic":{PoincareBall:[6,1,1,""]},"pymanopt.manifolds.hyperbolic.PoincareBall":{conformal_factor:[6,2,1,""],dim:[6,4,1,""],dist:[6,2,1,""],embedding:[6,2,1,""],euclidean_to_riemannian_gradient:[6,2,1,""],euclidean_to_riemannian_hessian:[6,2,1,""],exp:[6,2,1,""],inner_product:[6,2,1,""],log:[6,2,1,""],mobius_addition:[6,2,1,""],norm:[6,2,1,""],num_values:[6,4,1,""],pair_mean:[6,2,1,""],point_layout:[6,4,1,""],projection:[6,2,1,""],random_point:[6,2,1,""],random_tangent_vector:[6,2,1,""],retraction:[6,2,1,""],to_tangent_space:[6,2,1,""],transport:[6,2,1,""],typical_dist:[6,4,1,""],zero_vector:[6,2,1,""]},"pymanopt.manifolds.manifold":{Manifold:[6,1,1,""],RetrAsExpMixin:[6,1,1,""],RiemannianSubmanifold:[6,1,1,""]},"pymanopt.manifolds.manifold.Manifold":{dim:[6,4,1,""],dist:[6,2,1,""],embedding:[6,2,1,""],euclidean_to_riemannian_gradient:[6,2,1,""],euclidean_to_riemannian_hessian:[6,2,1,""],exp:[6,2,1,""],inner_product:[6,2,1,""],log:[6,2,1,""],norm:[6,2,1,""],num_values:[6,4,1,""],pair_mean:[6,2,1,""],point_layout:[6,4,1,""],projection:[6,2,1,""],random_point:[6,2,1,""],random_tangent_vector:[6,2,1,""],retraction:[6,2,1,""],to_tangent_space:[6,2,1,""],transport:[6,2,1,""],typical_dist:[6,4,1,""],zero_vector:[6,2,1,""]},"pymanopt.manifolds.manifold.RetrAsExpMixin":{exp:[6,2,1,""]},"pymanopt.manifolds.manifold.RiemannianSubmanifold":{dim:[6,4,1,""],dist:[6,2,1,""],embedding:[6,2,1,""],euclidean_to_riemannian_gradient:[6,2,1,""],euclidean_to_riemannian_hessian:[6,2,1,""],exp:[6,2,1,""],inner_product:[6,2,1,""],log:[6,2,1,""],norm:[6,2,1,""],num_values:[6,4,1,""],pair_mean:[6,2,1,""],point_layout:[6,4,1,""],projection:[6,2,1,""],random_point:[6,2,1,""],random_tangent_vector:[6,2,1,""],retraction:[6,2,1,""],to_tangent_space:[6,2,1,""],transport:[6,2,1,""],typical_dist:[6,4,1,""],weingarten:[6,2,1,""],zero_vector:[6,2,1,""]},"pymanopt.manifolds.oblique":{Oblique:[6,1,1,""]},"pymanopt.manifolds.oblique.Oblique":{dim:[6,4,1,""],dist:[6,2,1,""],embedding:[6,2,1,""],euclidean_to_riemannian_gradient:[6,2,1,""],euclidean_to_riemannian_hessian:[6,2,1,""],exp:[6,2,1,""],inner_product:[6,2,1,""],log:[6,2,1,""],norm:[6,2,1,""],num_values:[6,4,1,""],pair_mean:[6,2,1,""],point_layout:[6,4,1,""],projection:[6,2,1,""],random_point:[6,2,1,""],random_tangent_vector:[6,2,1,""],retraction:[6,2,1,""],to_tangent_space:[6,2,1,""],transport:[6,2,1,""],typical_dist:[6,4,1,""],weingarten:[6,2,1,""],zero_vector:[6,2,1,""]},"pymanopt.manifolds.positive":{Positive:[6,1,1,""]},"pymanopt.manifolds.positive.Positive":{dim:[6,4,1,""],dist:[6,2,1,""],embedding:[6,2,1,""],euclidean_to_riemannian_gradient:[6,2,1,""],euclidean_to_riemannian_hessian:[6,2,1,""],exp:[6,2,1,""],inner_product:[6,2,1,""],log:[6,2,1,""],norm:[6,2,1,""],num_values:[6,4,1,""],pair_mean:[6,2,1,""],point_layout:[6,4,1,""],projection:[6,2,1,""],random_point:[6,2,1,""],random_tangent_vector:[6,2,1,""],retraction:[6,2,1,""],to_tangent_space:[6,2,1,""],transport:[6,2,1,""],typical_dist:[6,4,1,""],zero_vector:[6,2,1,""]},"pymanopt.manifolds.positive_definite":{SymmetricPositiveDefinite:[6,1,1,""]},"pymanopt.manifolds.positive_definite.SymmetricPositiveDefinite":{dim:[6,4,1,""],dist:[6,2,1,""],embedding:[6,2,1,""],euclidean_to_riemannian_gradient:[6,2,1,""],euclidean_to_riemannian_hessian:[6,2,1,""],exp:[6,2,1,""],inner_product:[6,2,1,""],log:[6,2,1,""],norm:[6,2,1,""],num_values:[6,4,1,""],pair_mean:[6,2,1,""],point_layout:[6,4,1,""],projection:[6,2,1,""],random_point:[6,2,1,""],random_tangent_vector:[6,2,1,""],retraction:[6,2,1,""],to_tangent_space:[6,2,1,""],transport:[6,2,1,""],typical_dist:[6,4,1,""],weingarten:[6,2,1,""],zero_vector:[6,2,1,""]},"pymanopt.manifolds.product":{Product:[6,1,1,""]},"pymanopt.manifolds.product.Product":{dim:[6,4,1,""],dist:[6,2,1,""],embedding:[6,2,1,""],euclidean_to_riemannian_gradient:[6,2,1,""],euclidean_to_riemannian_hessian:[6,2,1,""],exp:[6,2,1,""],inner_product:[6,2,1,""],log:[6,2,1,""],norm:[6,2,1,""],num_values:[6,4,1,""],pair_mean:[6,2,1,""],point_layout:[6,4,1,""],projection:[6,2,1,""],random_point:[6,2,1,""],random_tangent_vector:[6,2,1,""],retraction:[6,2,1,""],to_tangent_space:[6,2,1,""],transport:[6,2,1,""],typical_dist:[6,4,1,""],zero_vector:[6,2,1,""]},"pymanopt.manifolds.psd":{Elliptope:[6,1,1,""],PSDFixedRank:[6,1,1,""],PSDFixedRankComplex:[6,1,1,""]},"pymanopt.manifolds.psd.Elliptope":{dim:[6,4,1,""],dist:[6,2,1,""],embedding:[6,2,1,""],euclidean_to_riemannian_gradient:[6,2,1,""],euclidean_to_riemannian_hessian:[6,2,1,""],exp:[6,2,1,""],inner_product:[6,2,1,""],log:[6,2,1,""],norm:[6,2,1,""],num_values:[6,4,1,""],pair_mean:[6,2,1,""],point_layout:[6,4,1,""],projection:[6,2,1,""],random_point:[6,2,1,""],random_tangent_vector:[6,2,1,""],retraction:[6,2,1,""],to_tangent_space:[6,2,1,""],transport:[6,2,1,""],typical_dist:[6,4,1,""],zero_vector:[6,2,1,""]},"pymanopt.manifolds.psd.PSDFixedRank":{dim:[6,4,1,""],dist:[6,2,1,""],embedding:[6,2,1,""],euclidean_to_riemannian_gradient:[6,2,1,""],euclidean_to_riemannian_hessian:[6,2,1,""],exp:[6,2,1,""],inner_product:[6,2,1,""],log:[6,2,1,""],norm:[6,2,1,""],num_values:[6,4,1,""],pair_mean:[6,2,1,""],point_layout:[6,4,1,""],projection:[6,2,1,""],random_point:[6,2,1,""],random_tangent_vector:[6,2,1,""],retraction:[6,2,1,""],to_tangent_space:[6,2,1,""],transport:[6,2,1,""],typical_dist:[6,4,1,""],zero_vector:[6,2,1,""]},"pymanopt.manifolds.psd.PSDFixedRankComplex":{dim:[6,4,1,""],dist:[6,2,1,""],embedding:[6,2,1,""],euclidean_to_riemannian_gradient:[6,2,1,""],euclidean_to_riemannian_hessian:[6,2,1,""],exp:[6,2,1,""],inner_product:[6,2,1,""],log:[6,2,1,""],norm:[6,2,1,""],num_values:[6,4,1,""],pair_mean:[6,2,1,""],point_layout:[6,4,1,""],projection:[6,2,1,""],random_point:[6,2,1,""],random_tangent_vector:[6,2,1,""],retraction:[6,2,1,""],to_tangent_space:[6,2,1,""],transport:[6,2,1,""],typical_dist:[6,4,1,""],zero_vector:[6,2,1,""]},"pymanopt.manifolds.sphere":{Sphere:[6,1,1,""],SphereSubspaceComplementIntersection:[6,1,1,""],SphereSubspaceIntersection:[6,1,1,""]},"pymanopt.manifolds.sphere.Sphere":{dim:[6,4,1,""],dist:[6,2,1,""],embedding:[6,2,1,""],euclidean_to_riemannian_gradient:[6,2,1,""],euclidean_to_riemannian_hessian:[6,2,1,""],exp:[6,2,1,""],inner_product:[6,2,1,""],log:[6,2,1,""],norm:[6,2,1,""],num_values:[6,4,1,""],pair_mean:[6,2,1,""],point_layout:[6,4,1,""],projection:[6,2,1,""],random_point:[6,2,1,""],random_tangent_vector:[6,2,1,""],retraction:[6,2,1,""],to_tangent_space:[6,2,1,""],transport:[6,2,1,""],typical_dist:[6,4,1,""],weingarten:[6,2,1,""],zero_vector:[6,2,1,""]},"pymanopt.manifolds.sphere.SphereSubspaceComplementIntersection":{dim:[6,4,1,""],dist:[6,2,1,""],embedding:[6,2,1,""],euclidean_to_riemannian_gradient:[6,2,1,""],euclidean_to_riemannian_hessian:[6,2,1,""],exp:[6,2,1,""],inner_product:[6,2,1,""],log:[6,2,1,""],norm:[6,2,1,""],num_values:[6,4,1,""],pair_mean:[6,2,1,""],point_layout:[6,4,1,""],projection:[6,2,1,""],random_point:[6,2,1,""],random_tangent_vector:[6,2,1,""],retraction:[6,2,1,""],to_tangent_space:[6,2,1,""],transport:[6,2,1,""],typical_dist:[6,4,1,""],weingarten:[6,2,1,""],zero_vector:[6,2,1,""]},"pymanopt.manifolds.sphere.SphereSubspaceIntersection":{dim:[6,4,1,""],dist:[6,2,1,""],embedding:[6,2,1,""],euclidean_to_riemannian_gradient:[6,2,1,""],euclidean_to_riemannian_hessian:[6,2,1,""],exp:[6,2,1,""],inner_product:[6,2,1,""],log:[6,2,1,""],norm:[6,2,1,""],num_values:[6,4,1,""],pair_mean:[6,2,1,""],point_layout:[6,4,1,""],projection:[6,2,1,""],random_point:[6,2,1,""],random_tangent_vector:[6,2,1,""],retraction:[6,2,1,""],to_tangent_space:[6,2,1,""],transport:[6,2,1,""],typical_dist:[6,4,1,""],weingarten:[6,2,1,""],zero_vector:[6,2,1,""]},"pymanopt.manifolds.stiefel":{Stiefel:[6,1,1,""]},"pymanopt.manifolds.stiefel.Stiefel":{dim:[6,4,1,""],dist:[6,2,1,""],embedding:[6,2,1,""],euclidean_to_riemannian_gradient:[6,2,1,""],euclidean_to_riemannian_hessian:[6,2,1,""],exp:[6,2,1,""],inner_product:[6,2,1,""],log:[6,2,1,""],norm:[6,2,1,""],num_values:[6,4,1,""],pair_mean:[6,2,1,""],point_layout:[6,4,1,""],projection:[6,2,1,""],random_point:[6,2,1,""],random_tangent_vector:[6,2,1,""],retraction:[6,2,1,""],to_tangent_space:[6,2,1,""],transport:[6,2,1,""],typical_dist:[6,4,1,""],weingarten:[6,2,1,""],zero_vector:[6,2,1,""]},"pymanopt.optimizers":{conjugate_gradient:[7,0,0,"-"],line_search:[7,0,0,"-"],nelder_mead:[7,0,0,"-"],optimizer:[7,0,0,"-"],particle_swarm:[7,0,0,"-"],steepest_descent:[7,0,0,"-"],trust_regions:[7,0,0,"-"]},"pymanopt.optimizers.conjugate_gradient":{ConjugateGradient:[7,1,1,""]},"pymanopt.optimizers.conjugate_gradient.ConjugateGradient":{run:[7,2,1,""]},"pymanopt.optimizers.line_search":{AdaptiveLineSearcher:[7,1,1,""],BackTrackingLineSearcher:[7,1,1,""]},"pymanopt.optimizers.line_search.AdaptiveLineSearcher":{search:[7,2,1,""]},"pymanopt.optimizers.line_search.BackTrackingLineSearcher":{search:[7,2,1,""]},"pymanopt.optimizers.nelder_mead":{NelderMead:[7,1,1,""],compute_centroid:[7,3,1,""]},"pymanopt.optimizers.nelder_mead.NelderMead":{run:[7,2,1,""]},"pymanopt.optimizers.optimizer":{Optimizer:[7,1,1,""],OptimizerResult:[7,1,1,""]},"pymanopt.optimizers.optimizer.Optimizer":{run:[7,2,1,""]},"pymanopt.optimizers.optimizer.OptimizerResult":{cost:[7,5,1,""],cost_evaluations:[7,5,1,""],gradient_norm:[7,5,1,""],iterations:[7,5,1,""],log:[7,5,1,""],point:[7,5,1,""],step_size:[7,5,1,""],stopping_criterion:[7,5,1,""],time:[7,5,1,""]},"pymanopt.optimizers.particle_swarm":{ParticleSwarm:[7,1,1,""]},"pymanopt.optimizers.particle_swarm.ParticleSwarm":{run:[7,2,1,""]},"pymanopt.optimizers.steepest_descent":{SteepestDescent:[7,1,1,""]},"pymanopt.optimizers.steepest_descent.SteepestDescent":{run:[7,2,1,""]},"pymanopt.optimizers.trust_regions":{TrustRegions:[7,1,1,""]},"pymanopt.optimizers.trust_regions.TrustRegions":{EXCEEDED_TR:[7,5,1,""],MAX_INNER_ITER:[7,5,1,""],MODEL_INCREASED:[7,5,1,""],NEGATIVE_CURVATURE:[7,5,1,""],REACHED_TARGET_LINEAR:[7,5,1,""],REACHED_TARGET_SUPERLINEAR:[7,5,1,""],TCG_STOP_REASONS:[7,5,1,""],run:[7,2,1,""]},"pymanopt.tools":{diagnostics:[10,0,0,"-"],multi:[10,0,0,"-"],testing:[10,0,0,"-"]},"pymanopt.tools.diagnostics":{check_directional_derivative:[10,3,1,""],check_gradient:[10,3,1,""],check_hessian:[10,3,1,""],check_retraction:[10,3,1,""],identify_linear_piece:[10,3,1,""]},"pymanopt.tools.multi":{multiexpm:[10,3,1,""],multieye:[10,3,1,""],multihconj:[10,3,1,""],multiherm:[10,3,1,""],multilogm:[10,3,1,""],multiqr:[10,3,1,""],multiskew:[10,3,1,""],multiskewh:[10,3,1,""],multisym:[10,3,1,""],multitransp:[10,3,1,""]},"pymanopt.tools.testing":{euclidean_to_riemannian_gradient:[10,3,1,""],euclidean_to_riemannian_hessian:[10,3,1,""],riemannian_gradient:[10,3,1,""]},pymanopt:{"function":[2,0,0,"-"],autodiff:[2,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"],"4":["py","property","Python property"],"5":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function","4":"py:property","5":"py:attribute"},terms:{"0":[4,6,7,9],"00":9,"0001":7,"01":[4,9],"02":[4,9],"03":[4,9],"04":[4,9],"05":9,"06":[7,9],"0609050":3,"07":9,"0741058657312559e":9,"07677":4,"077400":4,"077520":4,"077532":4,"08":4,"08146221475273578":4,"09":4,"1":[3,4,5,6,7,9],"10":[6,7,9],"1000":[4,7],"1041943339110254e":9,"11":[4,6,9],"11228845e":9,"12":9,"12046":3,"1214":3,"1236":3,"13":9,"135":3,"137":5,"13915041e":9,"14":9,"15":[4,9],"1506":4,"158":3,"16":[5,9],"16996083e":9,"17":[5,9],"177":5,"18":9,"19":9,"1e":[4,7],"2":[3,4,6,7,9],"20":[3,9],"2001":4,"2006":3,"2007":3,"2009":3,"2010":[3,6],"2012":3,"2013":3,"2015":3,"2016":5,"2020":3,"2021":3,"2023":4,"21":9,"2103":3,"22":[3,9],"23":[3,9],"2327":3,"2351":3,"23937710e":9,"245":4,"25":[3,4,7],"25780214e":9,"2667369971251594e":9,"2849633289004561e":9,"29867082148918006":4,"3":[0,4,5,6,7,9],"30":4,"32":4,"3442":4,"35":3,"36422863e":9,"379":3,"38":4,"38225031":9,"38225034":9,"39":[3,4],"4":[4,6,7,9],"402":3,"40941735e":9,"4100298597091836e":9,"42":[4,9],"42317042e":9,"434":4,"45210081e":9,"45507203e":9,"46":4,"47":6,"47643452e":9,"48381052e":9,"48843088":9,"48843097":9,"5":[3,4,5,6,7,9],"5000":7,"5219408277812505e":9,"52279600e":9,"5269956262562046e":9,"5273114803528709e":9,"5273905588875487e":9,"5274100956128560e":9,"5274154319869837e":9,"5274156215853507e":9,"5274162595152783e":9,"5274168030609154e":9,"5274168133149475e":9,"5274168150025758e":9,"5274168150483476e":9,"5274168151841643e":9,"5274168152087644e":9,"5274168152220804e":9,"5274168152229037e":9,"5274168152252021e":9,"5274168152255774e":9,"58":3,"59671326e":9,"6":[4,6,9],"61140952e":9,"6198669637580841":4,"62943721e":9,"64":4,"65626470e":9,"66398414e":9,"7":[4,9],"70222768e":9,"713":3,"739":3,"78442327":9,"78442334":9,"8":[6,9],"81712914e":9,"84":4,"89":4,"9":9,"90706914e":9,"90742722e":9,"96":4,"96142583e":9,"98":4,"abstract":[6,7],"break":6,"case":[6,8,9],"class":[2,4,6,7,8],"default":[4,6],"do":[4,9],"final":6,"float":[4,6,7],"function":[2,4,5,6,7,8,9,10],"h\u00fcper":3,"import":[4,9],"int":[6,7],"j\u00e9r\u00f4me":3,"journ\u00e9":3,"long":6,"m\u00f6biu":6,"new":[2,7],"public":0,"return":[2,4,6,7,8,9,10],"switch":6,"true":[4,6,9],"try":[4,6],"voil\u00e0":4,"while":[4,7],A:[2,3,4,5,6,7,8,10],And:4,As:[0,2,4,6,8,9],By:0,For:[2,4,6,8,9],If:[2,4,6,7,8,9],In:[4,6,8],It:[6,10],No:4,Not:6,Such:6,That:[9,10],The:[4,5,6,7,8,9,10],There:6,To:[0,6,9],_1:4,_2:[4,6],_3:4,_:[6,9],__init__:4,_backend:2,_euclidean:6,_gradient:8,_grassmannbas:6,_hessian:8,_i:4,_m:4,_n:4,_newxnewf:4,_oldf0:4,_psdfixedrank:6,_spherebas:6,_spheresubspaceintersectionmanifold:6,_unitarybas:6,ab:6,about:7,abov:[4,9],absil:3,accept:2,accomplish:4,acoust:3,act:6,ad:0,adapt:7,adaptivelinesearch:7,add:[0,4],addit:6,addition:9,address:0,adher:0,adj:6,after:[0,4,6,9],agnost:2,agre:[0,10],agreement:10,aim:5,al:3,algebra:6,alglorithm:7,algorithm:[1,3,4,6],align:9,all:[0,4,6,7,9,10],allclos:6,allow:[6,7],along:[4,6,7,10],alpha:[4,9],alpha_m:4,alreadi:9,also:[6,10],altern:[4,6],am2012:[3,6],ambient:[2,6,8],amount:9,ams2008:[3,6],amt2013:[3,6],an:[2,3,4,6,7,9,10],analysi:3,angl:6,ani:[6,7,8,9],annot:2,anoth:6,anp:9,api:[2,5],appear:[6,10],append:4,appli:10,applic:9,approach:[4,6],appropri:4,approxim:6,ar:[0,2,4,6,7,8,9,10],arbitrari:6,arc:6,arccosh:6,arg:7,argmax:9,argmin_:9,argument:[2,4,6,7,8],armijo:4,around:9,arrai:[4,6,10],art:5,articl:[3,5],arxiv:[3,4],asarrai:4,ask:5,associ:6,assum:[4,6,10],attempt:10,aug:3,augment:4,author:5,autodiff:[2,6,8],autograd:[2,4,9],automat:[0,1,5,8,9],avail:[3,6,9],avoid:4,awai:[6,7],axi:4,b:[4,6],back:[4,6,7],backend:[1,9],backend_cl:2,backend_decorator_factori:2,background:6,backtrack:[4,7],backtrackinglinesearch:[4,7],ball:6,barrier:5,bart:3,base:[0,2,4,6,7,8,10],befor:7,begin:[4,9],behind:9,being:4,belong:[4,8],below:[2,6],ben:3,berlin:3,best:[0,6,10],beta:7,beta_rul:7,between:[6,10],beyond:6,bha2007:[3,6],bhatia:3,bi:6,bibliographi:1,bishop:4,bmatrix:4,boldsymbol:4,bool:6,borrow:0,both:[0,6,10],bou2020:[3,6],boumal:3,bound:7,branch:0,brief:4,bsd:[0,5],build:0,built:9,c:[4,6],calcul:[4,5,6],calibr:3,call:[4,6,7],callabl:[2,8],can:[2,4,6],cannot:4,canon:[6,9],cartesian:6,cc:4,cdot:[6,9],centroid:7,certain:6,certif:0,certifi:0,cf:4,cg:7,chang:0,chapter:6,check:[4,10],check_directional_deriv:10,check_gradi:10,check_hessian:10,check_retract:10,choic:[4,6,7],chosen:[4,6],ci:0,circl:1,cite:5,classic:3,claus:[0,5],clearli:9,clone:0,close:[4,6],closer:4,closest:6,cluster:4,code:0,coeffici:10,coincid:[6,9],collaps:4,collect:6,color:4,column:6,com:0,command:0,comment:5,commit:0,commut:6,compact:3,comparison:3,compat:[0,6,9],compil:4,complement:6,complet:[3,6],complex:1,complex_circl:6,complexcircl:6,complexgrassmann:6,compli:0,complic:6,compon:[4,6,10],compound:6,compress:7,comput:[2,3,4,5,6,7,8,10],compute_centroid:7,concaten:4,conceiv:9,condit:6,cone:3,confer:3,config:0,conform:6,conformal_factor:6,conic:3,conj:6,conjug:[1,3,10],conjugate_gradi:[6,7],conjugategradi:[6,7],consid:[4,7,9],consist:[0,6,10],constant:9,constitut:9,constrain:6,constraint:6,construct:7,contain:[0,4,6,10],contemporari:3,context:9,contigu:10,contract:7,contraction_factor:[4,7],contribut:5,conveni:6,converg:[6,7],convert:[6,10],convex:4,convinc:4,coordin:6,copi:6,copyright:0,core:[2,6,8],correct:10,correspond:6,cost:[2,4,7,8,9,10],cost_evalu:7,could:4,counterpart:[4,6],covari:4,cover:0,creat:[0,2,9],criterion:4,current:[4,6],curv:10,curvatur:7,d:[4,7,10],data:[4,10],datapoint:4,de:4,deal:6,decomposit:[2,6,10],decor:[2,8,9],decreas:4,def:[2,4,9],defer:6,defici:6,defin:[2,4,6,8,9,10],definit:[1,3,4],degre:10,delta0:7,delta_bar:7,demonstr:[4,9],denot:[6,9],densiti:4,depend:[0,6,9],deprec:4,deriv:[2,4,6,7,8,10],descent:[1,4],describ:[4,6],descript:6,det:[4,6],detail:[6,7],determin:[6,7],dev:0,develop:[0,5],df0:[4,7],diag:6,diagnost:1,diagon:6,dict:[4,7],did:0,differ:[6,9],differenti:[1,4,5,9],dim:[6,9],dimens:[4,6,9,10],dimension:6,direct:[4,6,7,8,9,10],directori:4,disabl:7,discuss:6,dist:6,dist_:6,distanc:6,distribut:[4,5],dlerror:4,dlopen:4,document:[2,6],doe:6,domin:9,dominant_eigenvector:9,done:9,dot:6,down:[4,6],dpi:4,drop:6,dso_load:4,dure:0,dynam:4,e:[0,4,6,7,8,10],each:[0,4,6,7,10],easi:9,easili:4,effici:[2,6,10],ehess:10,eig:9,eigenpair:9,eigenvalu:9,eigenvector:9,either:[0,5,6,7,9],electron:3,element:6,ell_2:6,elliptop:6,els:[4,6],em:4,email:0,embed:[6,8],en:9,enabl:[0,6],encourag:5,end:[4,9],environ:0,equal:4,equat:9,equip:6,equival:6,error:5,estim:9,et:[3,4],euclidean:[1,4,8,10],euclidean_gradi:[6,8,10],euclidean_hessian:[6,8,10],euclidean_to_riemannian_gradi:[6,10],euclidean_to_riemannian_hessian:[6,10],evalu:[6,7],even:4,everi:[0,6,9,10],exact:[6,7],exactli:[6,9],exampl:[0,4,5,6],exceed:7,exceeded_tr:7,except:4,execut:0,exist:0,exp:[4,6],expand:7,expand_dim:4,expans:7,expect:[4,6],explicit:0,explicitli:[6,8,10],exponenti:[6,10],expos:7,extend:5,extens:6,extrins:3,ey:4,f0:[4,7],f:9,fact:6,facto:4,factor:[6,7],fail:0,failur:0,fals:[4,6,7,10],familiar:9,far:7,featur:[0,5],figur:4,file:[0,4],fine:6,finish:4,first:[6,7,10],fit:[4,10],fix:1,fixed_rank:[2,6],fixedrankembed:[2,6],flag:6,flake8:0,fletcherreev:7,follow:[4,6,9],fork:0,form:6,formal:6,format:6,former:0,formula:6,found:[6,9],four:9,frac:[4,6,9],francesco:3,free:7,freeli:6,from:[0,2,3,4,6,7,8,9],full:6,further:[4,6],futurewarn:4,g:[0,4,6],gaussian:[4,9],gener:[3,4,5,6,7,8,10],geodes:[4,6],geometr:3,geometri:6,get:9,get_gradient_oper:2,get_hessian_oper:2,git:0,github:[0,5,6,9],gitter:5,given:[4,6,7,10],go:[0,9],good:0,got:4,gpu:4,grad:9,gradient:[1,2,3,5,6,8,9,10],gradient_norm:7,grassmann:1,grassmannian:6,ground:4,group:[1,3],gt:4,guarante:6,guid:[0,5],guidelin:0,ha:[4,6,10],haar:6,hager:3,hagerzhang:7,hat:4,have:[0,6],heidelberg:3,help:5,henc:[6,9],here:[4,6],hermitian:6,hessian:[2,3,5,6,8,10],hestenesstiefel:7,heurist:4,highest:10,hold:6,hongchao:3,hook:0,hosseini:[3,4],hostedtoolcach:4,how:[0,2,3,4,6,7,9],howev:6,html:5,http:[0,5,6,9],hvp:2,hyperbol:1,hz2006:[3,7],i:[0,6,7,8,10],id_n:6,id_p:6,idea:6,ident:[6,10],identifi:[6,10],identify_linear_piec:10,ieee:3,ii:6,illustr:9,immedi:0,implement:[2,5,6],importantli:4,includ:[0,6],increas:7,inde:[6,10],indefinit:0,indic:[4,6,9,10],indistinguish:6,individu:6,induc:6,inf:7,infer:[5,9],infinit:7,inform:[0,3,7],inherit:[2,6],initi:[4,6,7],initial_point:7,initial_step_s:[4,7],inlin:4,inner:[6,7,9],inner_product:6,insert:4,instal:[0,4],instanc:[2,7,9],instanti:[4,9],instead:[6,8],integr:0,interest:[6,9],interfac:2,interferometr:3,intern:[3,6,8],intersect:6,intrins:6,introduc:4,introduct:[3,9],invari:[6,9],invers:6,invok:0,involv:[0,6,9],io:[6,9],issu:6,item:4,iter:[4,7,9],its:[4,6],j:6,jacobian:10,jame:5,jax:[2,9],jba:[3,6],jeuri:3,jmlr:5,jochen:3,join:6,journal:[3,5],just:6,jvv2012:[3,6],k:[4,6,10],kappa:7,karcher:7,kei:4,kept:6,kernel:0,keyword:7,know:6,knowledg:0,known:[4,6,9],knut:3,koep:5,kwarg:7,lambda:9,lambda_:6,largest:9,last:4,latest:9,layout:[2,6],ld_library_path:4,ldot:6,lead:6,learn:[4,5],leav:[4,5],left:4,length:10,less:4,let:[4,6],level:7,leverag:5,li:6,lib:4,libnvinf:4,libnvinfer_plugin:4,librari:4,licens:[0,5],lie:6,like:[3,4,6,9],likelihood:4,linalg:[4,9],linalgerror:4,line:[0,1,4,10],line_search:7,linear:[7,10],linesearchmog:4,linux:0,list:[4,6],littl:4,load:4,local:[0,4,7],log:[4,6,7],log_q:4,log_verbos:7,logarithm:[3,6,10],logdet:4,loglikvec:4,logsumexp:4,longer:6,look:[3,4],low:[3,6],lower:5,lt:4,m:[2,4,6,10],machin:[4,5],mahoni:3,mai:[0,4,6,9],mainli:6,maintain:0,major:6,make:[0,4],malick:3,mani:6,manifold:[1,2,3,4,5,7,8,9,10],manm:[6,9],manual:[0,4],map:6,match:2,math:3,mathbb:4,mathbf:4,mathcal:4,mathemat:6,matplotlib:4,matric:[1,2,3,4,10],matrix:[3,4,6,9,10],matrix_rank:4,max_cost_evalu:7,max_inner_it:7,max_iter:[4,7],max_tim:7,maxim:[6,9],maximis:4,maximum:7,maxinn:7,mead:1,mean:[3,4,6,7],measur:6,memori:2,mention:4,messag:0,meth:6,method:[1,3,4,6],metric:[3,6,10],mez2006:[3,6],mezzadri:3,michel:3,mid:6,might:6,min:[4,9],min_:4,min_gradient_norm:7,min_step_s:7,minim:[7,9],minimum:7,mininn:7,minit:7,miss:4,mixin:6,mixtur:[4,9],mobius_addit:6,model:[5,7,9],model_increas:7,modif:0,modular:9,modulu:6,mog:5,monograph:6,more:[6,9],moreov:9,most:[6,7,8,10],move:[6,7],mu1hat:4,mu2hat:4,mu3hat:4,mu:4,multi:[1,6],multiexpm:10,multiey:10,multihconj:10,multiherm:10,multilogm:10,multipl:[4,6,9],multiqr:10,multiskew:10,multiskewh:10,multisym:10,multitransp:10,multivari:4,multivariate_norm:4,must:[2,4,6,7],n1:6,n2:6,n:[2,4,6,9,10],n_1:6,n_i:6,n_k:[4,6],name:[0,6],natur:6,ndarrai:6,need:[4,6,8,9],neg:7,negative_curvatur:7,neighbor:7,nelder:1,nelder_mead:7,neldermead:7,neq:9,newf:4,newx:[4,7],next:4,nicola:3,nikla:5,nk:6,non:6,none:[4,7,8,10],nonetyp:7,nonlinear:[3,7],nonzero:9,norm:[4,6,7,9],norm_d:4,normal:[6,9],normal_vector:6,nose2:0,nostalgia:7,note:[0,6,7,9],notebook:9,noth:7,notic:[0,6],notimplementederror:6,np:[4,6],nu:4,nu_k:4,nu_m:4,num_valu:6,number:[4,5,6,7],numer:[3,6,10],numpi:[2,4,6,8,9],nvidia:4,o:6,obei:6,object:[2,4,6,7,8],obliqu:1,obtain:[4,6],occurr:4,often:6,omit:10,onc:4,one:[0,2,4,6,9],ones:4,onli:[6,9,10],onlin:[3,6],onto:[4,10],open:[0,4,5,6],oper:[6,7,10],operatornam:4,opposit:7,opt:[4,9],optim:[1,3,5,6,8,9],optima:4,optimis:4,optimizerresult:7,option:[0,6,7,8,10],order:[6,10],org:[0,5],origin:6,orth_valu:7,orthgon:6,orthogon:[6,10],orthonorm:6,other:[6,8],otherwis:6,our:[0,4,5],ourselv:4,out:6,output:10,over:[4,6,7,8,9,10],own:6,p:[3,4,6,10],p_:4,pacif:3,packag:[0,4,9],page:5,pair_mean:6,paper:[5,6],par:4,parallel:6,paramet:[2,4,6,7,8],parameter:6,paren:6,part:0,particl:1,particle_swarm:7,particleswarm:7,particular:6,particularli:9,pass:[0,4,9],past:7,path:4,pattern:4,pd:4,pdf:6,pep8:0,perform:[3,4,6,7,10],ph:3,pi:4,pi_1:4,pi_2:4,pi_3:4,pi_m:4,pick:4,pihat:4,pip:[0,9],plan:6,plane:6,platform:4,pleas:[4,5,6],plot:4,plt:4,poincar:6,poincarebal:6,point:[2,4,6,7,8,9,10],point_a:6,point_b:6,point_layout:6,polakribier:7,polar:6,poli:10,polynomi:10,popul:7,population_s:7,portion:10,posit:[1,3,4,7],positive_definit:[6,10],possibl:6,potenti:[5,6,7],powel:7,power:4,practic:6,pre:0,precis:4,precondition:8,preprint:3,present:6,preserv:6,press:3,prevent:0,previou:[0,7],princeton:3,print:[4,7,9],probabl:4,problem:[1,2,4,5,6,7,9,10],procedur:[0,6],process:3,prod_:4,produc:[6,9],product:[1,2,4,9,10],proj:10,project:[0,3,5,6,8,10],projector:10,properli:4,properti:[6,8],propos:4,provid:[0,2,6,7,8],psd:[4,6],psdfixedrank:6,psdfixedrankcomplex:6,pso:7,publish:5,pull:0,purpos:6,push:0,py:4,py_util:4,pymanopt:[0,2,4,6,7,8,9,10],pyplot:4,python3:4,python:[0,2,4,5,9],pytorch:[2,9],q_:4,qr:[6,10],quantifi:7,quickstart:5,quotient:[6,9],r:[4,6,9,10],radii:6,radio:3,raf:3,rais:6,rajendra:3,ralf:3,random:[3,4,6,9,10],random_point:[4,6],random_tangent_vector:6,randomli:[6,7],rang:[4,10],rank:[1,3],rayleigh:9,rc:4,re:[6,9],reach:[4,6,7,9],reached_target_linear:7,reached_target_superlinear:7,reader:6,readthedoc:9,real:[0,6,8,9],recent:7,recognit:4,recommend:9,record:0,recov:6,redistribut:0,reduc:[4,5,6],refer:[0,2,5,6,9],reflect:7,refram:9,region:[1,6],reject:4,rel:7,reparameteris:4,replac:[4,9],report:5,repositori:[0,9],repres:[2,6,10],represent:6,request:[0,5],requir:[6,9],research:5,reset:4,reshad:3,residu:7,respect:[2,6],rest:4,restart:7,restrict:6,result:[0,4,6,7,9,10],retain:10,retract:[3,4,6,7,10],retrasexpmixin:6,reus:7,reuse_line_search:7,rgrad:10,rho_prim:7,rho_regular:7,riemannian:[1,3,5,6,8,9,10],riemannian_gradi:[8,10],riemannian_hessian:[8,10],riemanniansubmanifold:6,right:[0,4],rigor:6,robert:3,rodolph:3,rotat:6,row:6,rule:[4,7],run:[0,4,7,9],runtim:0,s:[0,2,4,5,6,7,9],sai:[0,6],same:6,sampl:[4,6,10],sarod:3,satisfi:[4,6,9,10],save:5,scalar:[6,8],scale:[6,9],scatter:4,scene:9,scienc:3,scipi:[4,9],scope:6,search:[1,4,6],searcher:7,sebastian:5,second:[4,6,7,9,10],section:6,see:[6,7],seed:9,segment:10,self:4,semidefinit:[1,3],sens:8,sepulchr:3,sequenc:6,seri:10,set:[0,6,9],set_printopt:4,setminu:9,setup:9,sh2015:[3,6],shape:[4,6,10],share:4,should:[0,6],show:4,siam:3,sigma1hat:4,sigma2hat:4,sigma3hat:4,sigma:4,signal:3,signatur:2,silent:7,similar:[6,10],similarli:6,simpl:6,simplest:[6,9],simplex:7,simpli:[0,6,8],simplifi:6,sinc:[6,9],singl:4,singleton:6,singular:[2,4,6],site:4,size:[4,6,7,9],skew:[6,10],skewsymmetr:6,slogdet:4,smooth:[3,6],so:[4,6,9],social:7,solut:9,solv:[4,6,7,9],some:[4,6,9,10],someon:0,someth:9,sourc:[0,2,5,6,7,8,10],space:[1,2,4,8,10],span:6,special:[4,6],specialorthogonalgroup:6,specif:[6,7,10],specifi:10,speech:3,sphere:[1,9],spheresubspacecomplementintersect:6,spheresubspaceintersect:6,springer:3,sra:[3,4],st:6,stage:0,standard:[4,6],start:[4,7,9],state:[4,5],steepest:1,steepest_desc:[6,7],steepestdesc:[4,6,7,9],step:[4,7,9],step_count:4,step_siz:[4,7],stiefel:[1,3],still:9,stopping_criterion:7,str:[6,7],strategi:7,stream_executor:4,stretch:7,string:6,strip:6,strongli:9,structur:6,style:0,submanifold:[6,8,10],submit:0,subset:6,subspac:6,succeq:4,sufficient_decreas:[4,7],suggest:[4,7,9],suit:0,sum:[4,6],sum_:[4,6],superlinear:7,support:6,sure:4,surfac:6,surnam:0,surpris:9,survei:3,suvrit:3,svd:6,swarm:1,sy:4,symmetr:[1,4,9,10],symmetricpositivedefinit:[4,6],t:[4,6,9,10],take:[6,8],taken:6,tangent:[4,6,7,8,10],tangent_vector:[6,10],tangent_vector_a:6,tangent_vector_b:6,tangenti:6,target:7,taylor:10,tcg_stop_reason:7,techniqu:5,templat:6,tensor:6,tensorflow:[2,4,9],tensorrt:4,termin:[4,7,9],test:[0,1],text:4,tf2tensorrt:4,tf:4,th:[4,6],than:[6,8],thei:[4,6],them:6,theorem:6,therefor:6,theta:[4,7],thi:[0,4,5,6,7,8,9,10],thinli:9,those:4,though:[6,9],three:[2,4,6],threshold:7,through:10,thu:5,time:[4,5,6,7,9],titl:5,to_tangent_spac:6,togeth:9,toi:4,tool:1,toolbox:[5,9],top:4,toru:6,total:6,town:6,townsend:5,tr:6,trace:6,track:[4,7],trait:4,traitlet:4,transact:3,transform:6,translat:6,transp:6,transport:6,transpos:10,treat:6,trivial:9,trt:4,trumpf:3,truncat:[6,10],trust:[1,6],trust_region:[6,7],trustregion:[6,7],truth:4,tupl:[6,7],turn:6,two:6,ty:9,type:[2,6,7],typic:[6,8],typical_dist:6,u:[2,6],unchang:4,under:5,underli:6,understand:0,understood:6,unfamiliar:[6,9],uniformli:6,union:[6,7],uniqu:9,unit:[6,9],unitari:6,unitarygroup:6,univers:3,unpack:4,unsur:9,up:[0,6,9,10],upper:7,url:5,us:[0,2,3,4,5,6,7,8,9],use_parallel_transport:6,use_quadratic_model:10,use_rand:7,user:[5,6,9],usernam:0,usual:[6,8,9],util:[0,4],v17:5,v:[4,6],valid:7,valu:[2,4,6,7,8,9],van2013:[3,6],vandebril:3,vandereycken:3,variabl:4,variant:0,vector:[2,4,6,7,8,9,10],verbos:[4,7],veri:9,verifi:0,version:[9,10],vertex:7,via:[0,2,6,9],visual:6,vma:[6,9],vmb:6,vmomega:6,vmq:6,vmu:6,vmv:[6,9],vmx:[6,9],vmy:6,vmy_i:6,vmz:6,volum:5,vp:6,vt:[2,6],w:[3,4,10],wa:[4,6],wai:6,warn:4,we:[0,4,5,6,9],weichwald:5,weingarten:6,well:[4,6,9],were:4,what:6,when:[0,6],where:[4,6,7,10],whether:[6,7],which:[0,6,7,8,9,10],who:0,whose:6,william:3,window:10,window_length:10,wise:6,wish:[5,6],without:[0,4,6],word:6,work:[0,5,9],worst:7,would:[4,6],wrap:[2,9],write:0,x64:4,x:[2,4,6,7,10],x_:6,xla:4,xopt:4,y:[4,10],yat2013:[3,6],yatawatta:3,year:5,yield:6,you:[0,4,5,6,9],your:[0,6,9],z:6,z_i:6,zero:[4,6,9],zero_vector:6,zh2021:[3,6],zhang:3,zimmermann:3},titles:["Contributing","API Reference","Automatic Differentiation","Bibliography","Riemannian Optimization for Inference in MoG models","Pymanopt","Manifolds","Optimization","Problem","Quickstart","Tools"],titleterms:{A:9,algorithm:7,api:1,astrai:4,automat:2,backend:2,bibliographi:3,circl:6,complex:6,conjug:7,contribut:0,definit:6,descent:7,diagnost:10,differenti:2,euclidean:6,exampl:9,fix:6,get:5,go:4,gradient:7,grassmann:6,group:6,hyperbol:6,infer:4,instal:9,line:7,manifold:6,matric:6,mead:7,method:7,model:4,modul:1,mog:4,multi:10,nelder:7,notebook:5,obliqu:6,off:0,optim:[4,7],packag:1,particl:7,posit:6,problem:8,product:6,pymanopt:5,quickstart:9,rank:6,refer:1,region:7,riemannian:[4,7],search:7,semidefinit:6,sign:0,simpl:9,space:6,sphere:6,start:5,steepest:7,stiefel:6,swarm:7,symmetr:6,test:10,thing:4,tool:10,trust:7,when:4}})