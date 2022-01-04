Search.setIndex({docnames:["CONTRIBUTING","api-reference","autodiff","bibliography","examples/notebooks/mixture_of_gaussians","index","manifolds","problem","quickstart","solvers","tools"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.viewcode":1,nbsphinx:3,sphinx:56},filenames:["CONTRIBUTING.md","api-reference.rst","autodiff.rst","bibliography.rst","examples/notebooks/mixture_of_gaussians.ipynb","index.rst","manifolds.rst","problem.rst","quickstart.rst","solvers.rst","tools.rst"],objects:{"pymanopt.autodiff":{Function:[2,1,1,""],make_tracing_backend_decorator:[2,3,1,""]},"pymanopt.autodiff.Function":{compute_gradient:[2,2,1,""],compute_hessian_vector_product:[2,2,1,""]},"pymanopt.core":{problem:[7,0,0,"-"]},"pymanopt.core.problem":{Problem:[7,1,1,""]},"pymanopt.core.problem.Problem":{cost:[7,4,1,""],egrad:[7,4,1,""],ehess:[7,4,1,""],grad:[7,4,1,""],hess:[7,4,1,""]},"pymanopt.function":{Autograd:[2,3,1,""],Callable:[2,3,1,""],PyTorch:[2,3,1,""],TensorFlow:[2,3,1,""]},"pymanopt.manifolds":{complex_circle:[6,0,0,"-"],complex_grassmann:[6,0,0,"-"],euclidean:[6,0,0,"-"],fixed_rank:[6,0,0,"-"],grassmann:[6,0,0,"-"],manifold:[6,0,0,"-"],oblique:[6,0,0,"-"],product:[6,0,0,"-"],psd:[6,0,0,"-"],special_orthogonal_group:[6,0,0,"-"],sphere:[6,0,0,"-"],stiefel:[6,0,0,"-"],strictly_positive_vectors:[6,0,0,"-"]},"pymanopt.manifolds.complex_circle":{ComplexCircle:[6,1,1,""]},"pymanopt.manifolds.complex_circle.ComplexCircle":{dist:[6,2,1,""],ehess2rhess:[6,2,1,""],exp:[6,2,1,""],inner:[6,2,1,""],log:[6,2,1,""],norm:[6,2,1,""],pairmean:[6,2,1,""],proj:[6,2,1,""],rand:[6,2,1,""],randvec:[6,2,1,""],retr:[6,2,1,""],tangent:[6,2,1,""],transp:[6,2,1,""],typicaldist:[6,4,1,""],zerovec:[6,2,1,""]},"pymanopt.manifolds.complex_grassmann":{ComplexGrassmann:[6,1,1,""]},"pymanopt.manifolds.complex_grassmann.ComplexGrassmann":{dist:[6,2,1,""],egrad2rgrad:[6,2,1,""],ehess2rhess:[6,2,1,""],exp:[6,2,1,""],inner:[6,2,1,""],log:[6,2,1,""],norm:[6,2,1,""],proj:[6,2,1,""],rand:[6,2,1,""],randvec:[6,2,1,""],retr:[6,2,1,""],transp:[6,2,1,""],typicaldist:[6,4,1,""],zerovec:[6,2,1,""]},"pymanopt.manifolds.euclidean":{Euclidean:[6,1,1,""],SkewSymmetric:[6,1,1,""],Symmetric:[6,1,1,""]},"pymanopt.manifolds.euclidean.SkewSymmetric":{ehess2rhess:[6,2,1,""],proj:[6,2,1,""],rand:[6,2,1,""],randvec:[6,2,1,""]},"pymanopt.manifolds.euclidean.Symmetric":{ehess2rhess:[6,2,1,""],proj:[6,2,1,""],rand:[6,2,1,""],randvec:[6,2,1,""]},"pymanopt.manifolds.fixed_rank":{FixedRankEmbedded:[6,1,1,""]},"pymanopt.manifolds.fixed_rank.FixedRankEmbedded":{egrad2rgrad:[6,2,1,""],inner:[6,2,1,""],norm:[6,2,1,""],proj:[6,2,1,""],rand:[6,2,1,""],randvec:[6,2,1,""],retr:[6,2,1,""],tangent2ambient:[6,2,1,""],transp:[6,2,1,""],typicaldist:[6,4,1,""],zerovec:[6,2,1,""]},"pymanopt.manifolds.grassmann":{Grassmann:[6,1,1,""]},"pymanopt.manifolds.grassmann.Grassmann":{dist:[6,2,1,""],egrad2rgrad:[6,2,1,""],ehess2rhess:[6,2,1,""],exp:[6,2,1,""],inner:[6,2,1,""],log:[6,2,1,""],norm:[6,2,1,""],proj:[6,2,1,""],rand:[6,2,1,""],randvec:[6,2,1,""],retr:[6,2,1,""],transp:[6,2,1,""],typicaldist:[6,4,1,""],zerovec:[6,2,1,""]},"pymanopt.manifolds.manifold":{EuclideanEmbeddedSubmanifold:[6,1,1,""],Manifold:[6,1,1,""]},"pymanopt.manifolds.manifold.EuclideanEmbeddedSubmanifold":{egrad2rgrad:[6,2,1,""],ehess2rhess:[6,2,1,""],weingarten:[6,2,1,""]},"pymanopt.manifolds.manifold.Manifold":{dim:[6,4,1,""],dist:[6,2,1,""],egrad2rgrad:[6,2,1,""],ehess2rhess:[6,2,1,""],exp:[6,2,1,""],inner:[6,2,1,""],log:[6,2,1,""],norm:[6,2,1,""],num_values:[6,4,1,""],pairmean:[6,2,1,""],point_layout:[6,4,1,""],proj:[6,2,1,""],rand:[6,2,1,""],randvec:[6,2,1,""],retr:[6,2,1,""],transp:[6,2,1,""],typicaldist:[6,4,1,""],zerovec:[6,2,1,""]},"pymanopt.manifolds.oblique":{Oblique:[6,1,1,""]},"pymanopt.manifolds.oblique.Oblique":{dist:[6,2,1,""],ehess2rhess:[6,2,1,""],exp:[6,2,1,""],inner:[6,2,1,""],log:[6,2,1,""],norm:[6,2,1,""],pairmean:[6,2,1,""],proj:[6,2,1,""],rand:[6,2,1,""],randvec:[6,2,1,""],retr:[6,2,1,""],transp:[6,2,1,""],typicaldist:[6,4,1,""],zerovec:[6,2,1,""]},"pymanopt.manifolds.product":{Product:[6,1,1,""]},"pymanopt.manifolds.product.Product":{dist:[6,2,1,""],egrad2rgrad:[6,2,1,""],ehess2rhess:[6,2,1,""],exp:[6,2,1,""],inner:[6,2,1,""],log:[6,2,1,""],norm:[6,2,1,""],pairmean:[6,2,1,""],proj:[6,2,1,""],rand:[6,2,1,""],randvec:[6,2,1,""],retr:[6,2,1,""],transp:[6,2,1,""],typicaldist:[6,4,1,""],zerovec:[6,2,1,""]},"pymanopt.manifolds.psd":{Elliptope:[6,1,1,""],PSDFixedRank:[6,1,1,""],PSDFixedRankComplex:[6,1,1,""],SymmetricPositiveDefinite:[6,1,1,""]},"pymanopt.manifolds.psd.Elliptope":{egrad2rgrad:[6,2,1,""],ehess2rhess:[6,2,1,""],inner:[6,2,1,""],norm:[6,2,1,""],proj:[6,2,1,""],rand:[6,2,1,""],randvec:[6,2,1,""],retr:[6,2,1,""],transp:[6,2,1,""],typicaldist:[6,4,1,""],zerovec:[6,2,1,""]},"pymanopt.manifolds.psd.PSDFixedRankComplex":{dist:[6,2,1,""],inner:[6,2,1,""],norm:[6,2,1,""],rand:[6,2,1,""]},"pymanopt.manifolds.psd.SymmetricPositiveDefinite":{dist:[6,2,1,""],egrad2rgrad:[6,2,1,""],ehess2rhess:[6,2,1,""],exp:[6,2,1,""],inner:[6,2,1,""],log:[6,2,1,""],norm:[6,2,1,""],proj:[6,2,1,""],rand:[6,2,1,""],randvec:[6,2,1,""],retr:[6,2,1,""],transp:[6,2,1,""],typicaldist:[6,4,1,""],zerovec:[6,2,1,""]},"pymanopt.manifolds.special_orthogonal_group":{SpecialOrthogonalGroup:[6,1,1,""]},"pymanopt.manifolds.special_orthogonal_group.SpecialOrthogonalGroup":{dist:[6,2,1,""],ehess2rhess:[6,2,1,""],exp:[6,2,1,""],inner:[6,2,1,""],log:[6,2,1,""],norm:[6,2,1,""],pairmean:[6,2,1,""],proj:[6,2,1,""],rand:[6,2,1,""],randvec:[6,2,1,""],retr2:[6,2,1,""],retr:[6,2,1,""],tangent2ambient:[6,2,1,""],tangent:[6,2,1,""],transp:[6,2,1,""],typicaldist:[6,4,1,""],zerovec:[6,2,1,""]},"pymanopt.manifolds.sphere":{Sphere:[6,1,1,""],SphereSubspaceComplementIntersection:[6,1,1,""],SphereSubspaceIntersection:[6,1,1,""]},"pymanopt.manifolds.stiefel":{Stiefel:[6,1,1,""]},"pymanopt.manifolds.stiefel.Stiefel":{ehess2rhess:[6,2,1,""],exp:[6,2,1,""],inner:[6,2,1,""],norm:[6,2,1,""],proj:[6,2,1,""],rand:[6,2,1,""],randvec:[6,2,1,""],retr:[6,2,1,""],transp:[6,2,1,""],typicaldist:[6,4,1,""],zerovec:[6,2,1,""]},"pymanopt.manifolds.strictly_positive_vectors":{StrictlyPositiveVectors:[6,1,1,""]},"pymanopt.manifolds.strictly_positive_vectors.StrictlyPositiveVectors":{dist:[6,2,1,""],egrad2rgrad:[6,2,1,""],exp:[6,2,1,""],inner:[6,2,1,""],log:[6,2,1,""],norm:[6,2,1,""],proj:[6,2,1,""],rand:[6,2,1,""],randvec:[6,2,1,""],retr:[6,2,1,""],typicaldist:[6,4,1,""],zerovec:[6,2,1,""]},"pymanopt.solvers":{conjugate_gradient:[9,0,0,"-"],linesearch:[9,0,0,"-"],nelder_mead:[9,0,0,"-"],particle_swarm:[9,0,0,"-"],solver:[9,0,0,"-"],steepest_descent:[9,0,0,"-"],trust_regions:[9,0,0,"-"]},"pymanopt.solvers.conjugate_gradient":{ConjugateGradient:[9,1,1,""]},"pymanopt.solvers.conjugate_gradient.ConjugateGradient":{solve:[9,2,1,""]},"pymanopt.solvers.linesearch":{LineSearchAdaptive:[9,1,1,""],LineSearchBackTracking:[9,1,1,""]},"pymanopt.solvers.linesearch.LineSearchAdaptive":{search:[9,2,1,""]},"pymanopt.solvers.linesearch.LineSearchBackTracking":{search:[9,2,1,""]},"pymanopt.solvers.nelder_mead":{NelderMead:[9,1,1,""],compute_centroid:[9,3,1,""]},"pymanopt.solvers.nelder_mead.NelderMead":{solve:[9,2,1,""]},"pymanopt.solvers.particle_swarm":{ParticleSwarm:[9,1,1,""]},"pymanopt.solvers.particle_swarm.ParticleSwarm":{solve:[9,2,1,""]},"pymanopt.solvers.solver":{Solver:[9,1,1,""]},"pymanopt.solvers.solver.Solver":{solve:[9,2,1,""]},"pymanopt.solvers.steepest_descent":{SteepestDescent:[9,1,1,""]},"pymanopt.solvers.steepest_descent.SteepestDescent":{solve:[9,2,1,""]},"pymanopt.solvers.trust_regions":{TrustRegions:[9,1,1,""]},"pymanopt.solvers.trust_regions.TrustRegions":{EXCEEDED_TR:[9,5,1,""],MAX_INNER_ITER:[9,5,1,""],MODEL_INCREASED:[9,5,1,""],NEGATIVE_CURVATURE:[9,5,1,""],REACHED_TARGET_LINEAR:[9,5,1,""],REACHED_TARGET_SUPERLINEAR:[9,5,1,""],TCG_STOP_REASONS:[9,5,1,""],solve:[9,2,1,""]},"pymanopt.tools":{diagnostics:[10,0,0,"-"],multi:[10,0,0,"-"],testing:[10,0,0,"-"]},"pymanopt.tools.diagnostics":{check_directional_derivative:[10,3,1,""],check_gradient:[10,3,1,""],identify_linear_piece:[10,3,1,""]},"pymanopt.tools.multi":{multiexp:[10,3,1,""],multieye:[10,3,1,""],multihconj:[10,3,1,""],multilog:[10,3,1,""],multiprod:[10,3,1,""],multiskew:[10,3,1,""],multisym:[10,3,1,""],multitransp:[10,3,1,""]},"pymanopt.tools.testing":{egrad2rgrad:[10,3,1,""],ehess2rhess:[10,3,1,""],rgrad:[10,3,1,""],rhess:[10,3,1,""]},pymanopt:{"function":[2,0,0,"-"],autodiff:[2,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"],"4":["py","property","Python property"],"5":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function","4":"py:property","5":"py:attribute"},terms:{"0":[4,6,7,8,9],"00":8,"0001":9,"01":[4,8],"02":[4,8],"03":[4,8],"04":[4,8],"05":8,"06":[8,9],"07":8,"0741058657312559e":8,"07677":4,"08":4,"08819372085284594":4,"1":[3,4,5,6,8,9],"10":[6,8,9],"1000":[4,9],"1041943339110254e":8,"11":8,"1109":6,"11228845e":8,"12":[4,8],"1214":3,"1236":3,"13":8,"137":5,"13915041e":8,"14":8,"15":8,"1506":4,"16":[4,5,8],"16996083e":8,"17":[5,8],"177":5,"179":4,"18":8,"19":8,"1e":[4,9],"2":[3,4,6,7,8,9,10],"20":8,"2001":4,"2007":3,"2009":[3,6],"2010":6,"2013":[3,6],"2015":3,"2016":5,"2020":3,"21":8,"22":8,"23":[3,8],"23937710e":8,"25":[3,4,9],"25780214e":8,"2667369971251594e":8,"2849633289004561e":8,"2951051573246835":4,"3":[0,4,5,6,8,9],"3044":4,"36422863e":8,"38225031":8,"38225034":8,"39":4,"4":[4,6,8,9],"40941735e":8,"4100298597091836e":8,"42":8,"42317042e":8,"434":4,"45":4,"45210081e":8,"45507203e":8,"47":4,"47643452e":8,"48381052e":8,"48843088":8,"48843097":8,"5":[4,5,6,8,9],"5000":9,"52":4,"5219408277812505e":8,"52279600e":8,"5269956262562046e":8,"5273114803528709e":8,"5273905588875487e":8,"5274100956128560e":8,"5274154319869837e":8,"5274156215853507e":8,"5274162595152783e":8,"5274168030609154e":8,"5274168133149475e":8,"5274168150025758e":8,"5274168150483476e":8,"5274168151841643e":8,"5274168152087644e":8,"5274168152220804e":8,"5274168152229037e":8,"5274168152252021e":8,"5274168152255774e":8,"59671326e":8,"6":[4,6,8],"61140952e":8,"6167011218224706":4,"62943721e":8,"65626470e":8,"6638382":6,"66398414e":8,"7":8,"70222768e":8,"713":3,"739":3,"78442327":8,"78442334":8,"8":8,"81712914e":8,"9":[4,8],"90706914e":8,"90742722e":8,"96":4,"96142583e":8,"97":4,"99":4,"abstract":[6,9],"break":6,"case":[6,7,8],"class":[2,4,6,7,9],"default":6,"do":[4,8],"float":4,"function":[2,4,5,6,7,8,9,10],"import":[4,6,8],"int":[6,7],"long":6,"m\u00f6biu":6,"new":[2,9],"public":0,"return":[2,4,6,7,8,9,10],"switch":6,"true":[4,8],"try":4,"voil\u00e0":4,"while":[4,7,9],A:[2,3,4,5,6,7,9,10],And:4,As:[0,2,4,6,7,8],But:6,By:[0,6],For:[2,4,6,7,8],If:[2,4,6,7,8,9],In:[4,6,7],It:[6,10],Not:6,Such:6,That:[8,10],The:[0,4,5,6,7,8,9,10],Then:6,There:6,To:[0,6,8],_1:4,_2:4,_3:4,__init__:4,_backend:2,_euclidean:6,_i:4,_m:4,_n:4,_newxnewf:4,_oldf0:4,_psdfixedrank:6,_retrasexpmixin:6,_sphere:6,_spheresubspaceintersectionmanifold:6,abov:8,absil:[3,6],accept:2,accomplish:4,ad:0,adapt:9,add:[0,4],addition:8,address:0,adher:0,after:[0,4,6,8],agnost:2,agre:[0,10],aim:5,algebra:6,alglorithm:9,algorithm:[1,3,4,6],align:8,all:[0,4,6,8,9,10],allow:[6,9],along:[4,6,9,10],alpha:[4,8],alpha_m:4,alreadi:8,also:[6,10],altern:[4,6],ambient:[2,6,7],amount:8,ams2008:[3,6],amt2013:[3,6],an:[2,3,4,6,8,9,10],analysi:6,ani:[6,7,8],annot:2,anoth:6,anp:8,api:[2,5],appear:[6,10],append:4,applic:[6,8],approach:[4,6],appropri:4,approxim:6,ar:[0,2,4,6,7,8,10],arbitrari:6,arc:6,arg:9,argmax:8,argmin_:8,argument:[2,4,6,7],armijo:4,around:8,arrai:[4,6,10],art:5,articl:5,arxiv:4,asarrai:4,ask:5,assum:[4,6,10],attempt:10,aug:3,augment:4,author:5,autodiff:[1,6,7],autograd:[2,4,8,10],automat:[0,5,7,8],avail:[3,6,8],avoid:4,awai:9,axi:4,b:[4,10],bach:6,back:[4,6,9],backend:[1,6,8],background:6,backtrack:[4,9],barrier:5,bart:3,base:[0,2,4,6,7,9,10],becaus:[6,10],been:6,befor:9,begin:[4,8],behind:8,being:[4,6],belong:[4,7],below:[2,6],berlin:3,best:[0,6,10],beta:9,beta_typ:9,between:6,beyond:6,bha2007:[3,6],bhatia:3,bibliographi:1,big:6,bishop:4,bmatrix:4,boldsymbol:4,bonnabel:6,bootstrap:0,borrow:0,both:[0,6,10],bou2020:[3,6],boumal:3,bound:9,branch:0,brief:4,bsd:[0,5],build:[0,6],built:8,c:[4,6],calcul:[4,5],calibr:6,call:[4,6,9],callabl:[2,7],can:[2,4,6],canon:[6,8],cartesian:6,cdot:8,centroid:9,certif:0,certifi:0,cf:4,cg:9,chang:[0,6],chapter:6,check:[4,10],check_directional_deriv:10,check_gradi:10,choic:4,chosen:[4,6],ci:0,circl:1,cite:5,claus:[0,5],clearli:8,clone:0,close:4,closer:4,cluster:4,code:[0,9],coeffici:10,coincid:8,collaps:4,color:4,column:6,com:0,command:0,comment:5,commit:0,compat:[0,6,8],complet:[3,6],complex:1,complex_circl:6,complex_grassmann:6,complexcircl:6,complexgrassmann:6,compli:0,compliment:6,compon:[4,6,10],compress:9,comput:[2,4,5,6,7,9,10],compute_centroid:9,compute_gradi:2,compute_hessian_vector_product:2,concaten:4,conceiv:8,concept:6,cone:6,confer:3,config:0,configur:0,conic:3,conjug:[1,10],conjugate_gradi:[6,9],conjugategradi:9,consid:[4,8,9],consist:[0,6,10],constant:8,constitut:8,constrain:6,constraint:6,construct:9,contain:[0,4,6,10],context:8,contigu:10,contract:9,contraction_factor:[4,9],contribut:5,converg:[6,9],convert:[6,10],convex:4,convinc:4,copyright:0,core:[2,7,9],correct:10,correctli:6,correspond:[6,10],cost:[2,4,6,7,8,9,10],could:6,counterpart:[4,6],covari:4,cover:0,creat:[0,2,6,8],criterion:[4,9],current:[4,6,10],curv:10,curvatur:9,d:[4,6,9,10],data:[4,10],datapoint:4,de:4,deal:6,decomposit:[2,6],decor:[1,7,8],decreas:4,def:[2,4,8],defici:6,defin:[2,4,6,7,8,10],definit:[3,4,6],degre:10,delta0:9,delta_bar:9,demonstr:[4,8],denot:8,densiti:4,depend:[0,6,8],deprec:4,deriv:[2,4,6,7,9,10],descent:[1,4],describ:[4,6],descript:6,desir:6,det:4,detail:6,determin:[6,9],dev:0,develop:[0,5],df0:[4,9],df:6,di:6,diag:6,diagnost:1,diagon:6,dict:4,did:0,differ:[6,8],differenti:[4,5,8],dim:[6,8],dimens:[4,6,8,10],dimension:6,direct:[4,7,8,9,10],disabl:9,discuss:6,dist:6,distanc:6,distribut:[4,5],docstr:6,document:[2,6,10],doe:6,doi:6,domin:8,dominant_eigenvector:8,done:8,dot:[4,6],down:[4,6],dpi:4,drop:6,ds:6,du:6,dure:0,dv:6,dx:6,e:[0,4,6,7,9,10],each:[0,4,6,10],easi:8,easili:4,effici:[2,6,10],egrad2rgrad:[6,10],egrad:[6,7,10],ehess2rhess:[6,10],ehess:[6,7,10],eig:8,eigenpair:8,eigenvalu:8,eigenvector:8,either:[0,5,6,8,9],element:6,elliptop:6,els:[4,6],em:4,email:0,embed:6,embedd:7,en:6,enabl:0,encourag:5,end:[4,8],endow:6,environ:0,equal:[4,6],equat:8,equip:6,equival:6,error:5,estim:8,et:4,euclidean:[1,4,7,10],euclideanembeddedsubmanifold:6,evalu:9,even:4,everi:[0,8,10],exact:[6,9],exactli:[6,8],exampl:[0,4,5,6],exceed:9,exceeded_tr:9,except:4,execut:0,exist:0,exp:[4,6],expand:9,expand_dim:4,expans:9,expect:[4,6],explicit:[0,10],explicitli:[6,7,10],exponenti:[6,10],expos:9,extend:5,extrins:3,ey:[4,6],f0:[4,9],f:[6,8],facto:4,factor:9,fail:0,failur:0,fals:[4,9,10],familiar:8,far:9,fbach:6,featur:[0,5],field:6,figur:4,file:0,fine:6,finish:4,first:[6,9,10],fit:[4,10],fix:1,fixed_rank:6,fixedrankembed:[2,6],flake8:0,float64:6,follow:[4,6,8],forc:6,fork:0,form:6,formal:6,former:0,formula:9,found:8,four:8,fr:6,frac:[4,8],free:9,freeli:6,frobeniu:6,from:[0,2,4,6,7,8,9],full:6,further:4,futurewarn:4,g:[4,6],gaussian:[4,8],gener:[4,5,6,9,10],geodes:[4,6],geometr:[3,6],geometri:6,get:8,git:0,github:[0,5,6,8],gitter:5,given:[4,6,9,10],go:8,good:0,got:4,grad:[7,8],gradient:[1,2,5,6,7,8,10],grassmann:1,grassmannian:6,ground:4,group:1,gt:4,guarante:6,guess:9,guid:[0,5],guidelin:0,h:6,ha:[4,6,10],hat:4,have:[0,6,10],heidelberg:3,help:5,henc:[6,8],here:[4,6],hermitian:[6,10],hess:7,hessian:[2,3,5,6,7,10],heurist:4,highest:10,hold:6,hook:0,hosseini:[3,4],hostedtoolcach:4,how:[0,2,4,6,8,9],howev:6,html:5,http:[5,6],hvp:2,hyperparamet:6,i:[0,6,7,9,10],icassp:6,idea:6,ident:[6,10],identifi:[6,10],identify_linear_piec:10,illustr:8,immedi:0,implement:[2,5,6,10],implicitli:6,importantli:4,includ:[0,6],increas:9,inde:10,indefinit:0,indic:[4,6,8,10],induc:6,inf:9,infer:[5,8],infinit:9,inform:[0,3,7,9],inherit:[2,6],initi:[4,6,9],initial_steps:[4,9],inlin:4,inner:[6,8,9],insert:4,instal:0,instanc:[2,8,9],instanti:[4,8],instead:[6,7],integr:0,interest:[6,8],interfac:2,interferometr:6,intern:[3,7],intersect:6,intrins:6,introduc:4,introduct:[3,8],invari:8,invers:6,invok:0,involv:[0,8],io:6,isomorph:6,issu:6,ist:9,item:4,iter:[4,8,9],its:4,j:6,jacobian:10,jame:5,jmlr:5,jochen:3,join:6,journal:[3,5,6],journe:6,journee2010_sdp:6,just:6,k:[4,6,10],kappa:9,karcher:9,kei:4,kernel:0,know:6,knowledg:0,known:[4,6,8],koep:5,kwarg:9,kxk:6,lambda:8,larg:6,larger:6,largest:8,last:4,latest:8,latter:6,layout:2,ldot:6,lead:6,learn:[4,5],leav:[4,5],left:4,length:10,less:4,let:[4,6],level:[7,9],leverag:5,li:6,lib:4,licens:[0,5],lie:6,like:[4,6,8],likelihood:4,linalg:[4,8],linalgerror:4,line:[0,1,4,10],linear:[9,10],linesearch:9,linesearchadapt:9,linesearchbacktrack:[4,9],linesearchmog:4,link:6,linux:0,list:[0,4,6],littl:4,local:[0,4,9],log:[4,6,9],log_q:4,logarithm:[6,10],logdet:4,loglikvec:4,logsumexp:4,logverbos:9,longer:6,look:[3,4],low:[3,6],lower:5,lt:4,m:[2,4,6,10],machin:[4,5],mahoni:3,mai:[0,4,6,8],maintain:0,major:6,make:[0,4],make_tracing_backend_decor:2,man:9,mani:6,manifold:[1,2,3,4,5,7,8,9,10],manm:8,manopt:6,manual:[0,4],map:6,match:2,mathbb:4,mathbf:4,mathcal:4,mathemat:6,matplotlib:4,matric:[1,2,3,4,10],matrix:[3,4,6,8,10],matrix_rank:4,max_inner_it:9,maxcostev:9,maxim:[6,8],maximis:4,maximum:9,maxinn:9,maxit:[4,9],maxtim:9,mead:1,mean:[4,6,9],memori:2,messag:0,method:[1,4,6],metric:6,mid:6,might:6,min:[4,8],min_:4,mingradnorm:9,minim:[8,9],minimum:9,mininn:9,minit:9,minsteps:9,mixtur:[4,8],model:[5,8,9],model_increas:9,modif:0,modul:6,modular:8,modulu:6,mog:5,monograph:6,more:[6,8,10],moreov:8,most:[6,7,9,10],move:9,mu1hat:4,mu2hat:4,mu3hat:4,mu:4,multi:[1,6],multiexp:10,multiey:10,multihconj:10,multilog:10,multipl:[4,6,8,10],multipli:10,multiprod:10,multiskew:10,multisym:10,multitransp:10,multivari:4,multivariate_norm:4,must:[2,4,6,9,10],mxn:6,n1:6,n2:6,n:[2,4,6,8,10],n_1:6,n_2:6,n_k:[4,6],name:[0,6],natur:6,ndarrai:[6,10],ndim:10,necessari:6,need:[4,6,7,8],neg:9,negative_curvatur:9,neighbor:9,nelder:1,nelder_mead:9,neldermead:9,neq:8,newf:4,newx:[4,9],next:4,nicola:3,nikla:5,nk:6,none:[4,7,9,10],nonlinear:9,nonzero:8,norm:[4,6,8,9],norm_d:4,normal:[6,8],nose2:0,nostalgia:9,note:[0,6,8],notebook:8,notic:[0,6],np:[4,6],nu:4,nu_k:4,nu_m:4,num_valu:6,number:[4,5,6,9],numer:[6,10],numpi:[4,6,8,10],nxk:6,nxn:6,obei:6,object:[2,4,6,7,9],obliqu:1,obtain:4,occurr:4,often:6,omit:10,onc:4,one:[0,2,4,8],ones:4,onli:[6,8,10],onlin:[3,6,10],onto:[4,10],open:[0,5],oper:[6,7,9],operatornam:4,opposit:9,opt:[4,8],optim:[1,3,5,6,7,8],optima:4,optimis:4,option:[0,6,7,10],order:[6,10],org:[0,5,6],orth_valu:9,orthogon:[1,10],orthonorm:6,other:[6,7],our:[0,4,5],ourselv:4,out:6,output:[8,10],over:[4,6,7,8,9,10],own:6,p:[3,4,6,10],p_:4,packag:[0,4,8],page:5,pairmean:6,paper:[5,6],par:4,parallel:6,paramet:[2,4,6,7,9,10],parameter:6,part:[0,6],particl:1,particle_swarm:9,particleswarm:9,particular:6,particularli:8,pass:[0,4,8],past:9,path:4,pattern:4,pd:4,pdf:6,pep8:0,perform:[4,6,9,10],pi:4,pi_1:4,pi_2:4,pi_3:4,pi_m:4,pick:4,pihat:4,pip:[0,8],plan:6,plane:6,pleas:[5,6],plot:4,plt:4,point:[2,4,6,7,8,9,10],point_layout:6,poli:10,polynomi:10,popul:9,populations:9,portion:10,pos_def:10,posit:[1,3,4],potenti:[5,6],powel:9,power:4,practic:6,pre:0,precis:[4,10],precon:7,press:3,prevent:0,previou:[0,9],princeton:3,print:[4,7,8],probabl:4,problem:[1,2,4,5,6,8,9,10],procedur:0,prod_:4,produc:[6,8],product:[1,2,4,7,8,10],proj:[6,10],project:[0,5,6,7,10],properti:[6,7],propos:4,provid:[0,2,6,7,9],psd:[4,6],psdfixedrank:6,psdfixedrankcomplex:6,pso:9,publish:5,pull:0,purpos:6,push:0,py:[0,4],pyenv:0,pymanopt:[0,2,4,6,7,8,9,10],pyplot:4,python3:4,python:[0,2,4,5,8],pytorch:[2,8],q:6,q_:4,qr:6,quantifi:9,quickstart:5,quotient:[6,8],r:[4,6,8],r_:6,radii:6,radio:6,rajendra:3,rand:[4,6],random:[4,6,8,9,10],randomli:9,randvec:6,rang:[4,10],rank:[1,3],rayleigh:8,rc:4,re:8,reach:[4,8,9],reached_target_linear:9,reached_target_superlinear:9,reader:6,real:[0,6,7,8],recent:9,recognit:4,recommend:8,record:0,recov:6,redistribut:0,reduc:[4,5,6],refer:[0,2,5,6,8],reflect:9,refram:8,region:[1,6],reject:4,rel:9,reparameteris:4,replac:[4,8],report:5,repositori:[0,8],repres:[2,6,10],represent:6,request:[0,5],requir:[0,6,8],research:5,reset:4,reshad:3,residu:9,respect:[2,6,10],rest:4,restart:9,restrict:6,result:[0,4,10],retain:10,retr2:6,retr:[4,6],retract:[4,6,9],reus:9,reuselinesearch:9,rgrad:10,rhess:10,rho_prim:9,rho_regular:9,riemannian:[1,3,5,6,7,8,10],right:[0,4],rigor:6,robert:3,rodolph:3,rotat:6,row:6,rule:[4,9],run:[0,4,8,9],runtim:0,s:[0,2,4,5,6,8,9],sai:[0,6],same:[6,10],sampl:[4,10],sarod:6,satisfi:[4,8,10],save:5,scalar:7,scale:[6,8],scatter:4,scene:8,scienc:3,scipi:[4,8],scope:6,script:0,search:[1,4,6],sebastian:5,second:[4,6,8,9,10],see:[6,9,10],seed:8,segment:10,self:4,semidefinit:1,sens:7,sepulchr:[3,6],seri:10,set:[0,6,8],set_printopt:4,setminu:8,setup:[0,8],sh2015:[3,6],sh:0,shape:[4,6,10],should:[0,6],show:4,siam:[3,6],sigma1hat:4,sigma2hat:4,sigma3hat:4,sigma:4,signatur:2,silent:[7,9],similar:10,similarli:6,simpl:[0,6],simplest:[6,8],simplex:9,simpli:[0,6,7],sinc:[6,8],singl:4,singular:[2,4,6],site:4,size:[4,6,8,9],skew:[6,10],skewsymmetr:6,slogdet:4,smooth:[3,6],so:[4,6,8],social:9,solut:8,solv:[4,6,8,9],solver:[1,4,6,7,8],some:[6,8,10],someon:0,someth:8,sourc:[0,2,5,6,7,9,10],space:[1,2,4,7,10],span:6,special:[1,4],special_orthogonal_group:6,specialorthogonalgroup:6,specif:[6,9,10],specifi:10,sphere:[1,8],spheresubspacecomplementintersect:6,spheresubspaceintersect:6,springer:3,sra:[3,4],stage:0,standard:4,start:[4,8,9],state:[4,5],steepest:1,steepest_desc:[6,9],steepestdesc:[4,8,9],step:[4,8,9],step_count:4,stepsiz:[4,9],stiefel:1,still:8,strategi:9,stretch:9,strictli:1,strictly_positive_vector:6,strictlypositivevector:6,strip:6,strongli:8,structur:[6,10],style:0,submanifold:[6,7,10],submit:0,subset:6,subspac:6,succeq:4,suff_decr:[4,9],suggest:[4,8,9],suit:0,sum:4,sum_:4,superlinear:9,support:6,surfac:6,surnam:0,surpris:8,suvrit:3,svd:6,swarm:1,sy:4,sym:10,symmetr:[4,6,8,10],symmetricpositivedefinit:[4,6],sz:6,t:[4,6,8,10],take:[6,7],taken:6,tangent2ambi:6,tangent:[4,6,7,9,10],target:9,taylor:10,tcg_stop_reason:9,techniqu:5,templat:6,tensor:6,tensorflow:[2,8],term:6,termin:[4,8,9],test:[0,1],text:4,th:4,than:[6,7],thei:[4,6],them:6,theorem:6,therefor:6,theta:[4,9],thi:[0,4,5,6,7,8,9,10],thinli:8,those:4,though:8,three:[2,4,6],threshold:9,through:10,thu:5,time:[4,5,6,8,9],titl:5,togeth:8,toi:4,too:6,tool:[0,1],toolbox:[5,8],top:4,toru:6,total:6,town:6,townsend:5,trace:6,track:[4,9],trait:4,traitlet:4,transform:6,translat:6,transp:6,transport:6,transpos:10,trivial:8,trumpf:3,truncat:[6,10],trust:[1,6],trust_region:[6,9],trustregion:[6,9],truth:4,tupl:[6,9],two:6,txt:0,ty:8,type:[2,6,10],typic:7,typicaldist:6,u:[2,6,10],unchang:4,unconstrain:6,under:5,understand:0,unfamiliar:[6,8],uniqu:8,unit:[6,8],unitari:6,univers:3,unpack:4,unsur:8,up:[0,6,8,10],upper:9,url:5,us:[0,2,4,5,6,7,8,9,10],use_rand:9,user:[5,6,8],usernam:0,usual:[6,7,8],usv:6,util:0,uz:6,v17:5,v:[4,6],valu:[2,4,6,7,8,9],van2013:[3,6],vandereycken:3,variabl:4,vector:[1,2,4,7,8,9,10],verbos:[4,7,9],veri:8,verifi:0,version:[8,10],vertex:9,via:[0,2,6,8],virtualenv:0,visual:6,vma:8,vmv:8,vmx:8,volum:5,vp:6,vt:[2,6],vz:6,w:6,wa:4,wai:6,warn:4,we:[0,4,5,6,8],weichwald:5,weingarten:6,well:[4,6,8],were:4,what:6,when:[0,6],where:[4,6,9,10],whether:9,which:[0,6,7,8,9,10],who:0,why:6,window:10,window_length:10,wish:[5,6],without:[0,4],work:[0,5,6,8],worst:9,would:6,wrap:[2,8],write:0,www:6,x1:6,x2:6,x64:4,x:[2,4,6,9,10],xdot:6,xopt:4,y:[4,6,10],yatawatta:6,ydot:6,year:5,yield:6,you:[0,4,5,6,8],your:[0,6,8],yq:6,yy:6,z1:6,z2:6,z:6,zdot:6,zero:[4,6,8],zerovec:6},titles:["Contributing","API Reference","Autodiff","Bibliography","Riemannian Optimization for Inference in MoG models","Pymanopt","Manifolds","Problem","Quickstart","Optimization","Tools"],titleterms:{A:8,algorithm:9,api:1,astrai:4,autodiff:2,backend:2,bibliographi:3,circl:6,complex:6,conjug:9,contribut:0,decor:2,descent:9,diagnost:10,euclidean:6,exampl:8,fix:6,get:5,go:4,gradient:9,grassmann:6,group:6,infer:4,instal:8,line:9,manifold:6,matric:6,mead:9,method:9,model:4,modul:1,mog:4,multi:10,nelder:9,notebook:5,obliqu:6,off:0,optim:[4,9],orthogon:6,packag:1,particl:9,posit:6,problem:7,product:6,pymanopt:5,quickstart:8,rank:6,refer:1,region:9,riemannian:[4,9],search:9,semidefinit:6,sign:0,simpl:8,solver:9,space:6,special:6,sphere:6,start:5,steepest:9,stiefel:6,strictli:6,swarm:9,test:10,thing:4,tool:10,trust:9,vector:6,when:4}})